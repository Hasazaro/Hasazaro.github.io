/*
 * Static build of the portfolio for GitHub Pages: `npm run build:pages`.
 * Output goes to dist-pages/, which the pages workflow deploys.
 */
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';

const entry = 'resources/static/index.html';

// Vite writes the HTML at the same path as its input, but GitHub Pages
// serves the site from the root, so move it to dist-pages/index.html.
const htmlAtRoot = (): Plugin => ({
    name: 'portfolio-html-at-root',
    enforce: 'post',
    generateBundle: {
        order: 'post',
        handler(_options, bundle) {
            const html = bundle[entry];

            if (html?.type === 'asset') {
                delete bundle[entry];
                this.emitFile({
                    type: 'asset',
                    fileName: 'index.html',
                    source: html.source,
                });
            }
        },
    },
});

export default defineConfig({
    base: '/',
    publicDir: false,
    plugins: [react(), tailwindcss(), htmlAtRoot()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
        },
    },
    build: {
        outDir: 'dist-pages',
        emptyOutDir: true,
        rollupOptions: {
            input: entry,
        },
    },
});
