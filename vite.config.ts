import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    react(),
  ],
});
