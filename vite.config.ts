import path from 'path';
import { fileURLToPath } from 'url';

import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');

  return {
    server: {
      proxy: {
        '/api': {
          target: env.BASE_API_URL,
          changeOrigin: true,
        },
      },
    },
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react(),
    ],
    resolve: {
      alias: {
        app: path.resolve(__dirname, './src/app'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        features: path.resolve(__dirname, './src/features'),
        hooks: path.resolve(__dirname, './src/hooks'),
        lib: path.resolve(__dirname, './src/lib'),
        utils: path.resolve(__dirname, './src/utils'),
        routes: path.resolve(__dirname, './src/routes'),
      },
    },
  };
});
