/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: true,
      nitro: {
        preset: 'vercel',
        vercel: {
          regions: ['fra1'], // EU регіон для кращої латентності
        },
        compressPublicAssets: {
          gzip: true,
          brotli: true
        },
        minify: true
      },

    }),
  ],
}));
