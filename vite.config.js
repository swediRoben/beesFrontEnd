import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    allowedHosts: [
      'beesfrontend-production.up.railway.app', // domaine Railway
      'www.beesasbl.org' // ton domaine custom ou celui vers lequel tu fais une requête
    ]
  }
})
