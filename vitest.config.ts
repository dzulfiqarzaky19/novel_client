import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
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
});
