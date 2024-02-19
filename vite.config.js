import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importez le module path pour manipuler les chemins

// Fonction utilitaire pour résoudre les chemins
function resolvePath(dir) {
  return path.resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Définissez vos alias ici
      '@': resolvePath('src'), // Exemple d'alias pour le répertoire src
    },
  },
});