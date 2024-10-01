import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr(),
    nodePolyfills({
      protocolImports: true,
    }),
  ],
});
