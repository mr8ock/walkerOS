import { config, defineConfig } from '@elbwalker/tsup';

const globalName = 'Walkerjs';

export default defineConfig([
  {
    ...config,
    dts: true,
    format: ['cjs', 'esm'],
    sourcemap: true,
  },
  // walker.js
  {
    ...config,
    entry: {
      walker: 'src/walkerjs.ts',
    },
    format: ['iife'],
    outExtension() {
      return { js: `.js` };
    },
    platform: 'browser',
  },
  // Browser
  {
    ...config,
    format: ['iife'],
    globalName,
    outExtension() {
      return { js: `.browser.js` };
    },
  },
  // ES5
  {
    ...config,
    format: ['iife'],
    globalName,
    outExtension() {
      return { js: `.es5.js` };
    },
    target: 'es5',
  },
]);
