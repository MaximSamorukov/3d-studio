import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    projects: [
      {
        extends: true,
        test: {
          include: ['src/**/*.server.test.{ts, tsx}'],
          name: 'server',
          environment: 'node',
        },
      },
      {
        extends: true,
        test: {
          include: ['src/**/*.client.test.{tsx,ts}'],
          name: 'clients',
          environment: 'jsdom',
        },
      },
    ],
  },
});
