import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    base: '/',
    preview: {
      allowedHosts: [
        'beesfrontend-production.up.railway.app' // 👈 ajoute ici ton domaine Railway
      ]
    }
})