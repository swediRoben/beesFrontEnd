import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 1121;

console.log("Environment PORT:", process.env.PORT);
console.log("Using PORT:", PORT);
console.log("Serving static files from:", path.join(__dirname, "dist"));

// Health check endpoint for Railway
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// detect which static folder exists (dist for Vite, build for CRA)
const distDir = path.join(__dirname, 'dist');
const buildDir = path.join(__dirname, 'build');

let staticDir = null;
if (fs.existsSync(distDir)) {
  staticDir = distDir;
  console.log('Serving static files from:', staticDir);
} else if (fs.existsSync(buildDir)) {
  staticDir = buildDir;
  console.log('Serving static files from:', staticDir);
} else {
  console.warn('No static build folder found (dist/ or build/). Make sure to run "npm run build".');
}

// Serve static if available
if (staticDir) {
  app.use(express.static(staticDir));

  // SPA fallback: only for requests that accept HTML (prevents intercepting asset requests)
  app.get('*', (req, res, next) => {
    const accept = req.headers.accept || '';
    if (accept.includes('text/html')) {
      res.sendFile(path.join(staticDir, 'index.html'), (err) => {
        if (err) {
          console.error('Error sending index.html:', err);
          if (!res.headersSent) res.status(err.status || 500).send('Server error');
        }
      });
    } else {
      // not an HTML request (likely an asset) -> continue so that 404/next middleware works normally
      next();
    }
  });
} else {
  // If there is no static build, provide a friendly root response so the process does not crash and Railway can connect
  app.get('/', (_req, res) => {
    res
      .status(200)
      .send('Server running but no static build found. Run "npm run build" to generate dist/ or build/.');
  });
}

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
