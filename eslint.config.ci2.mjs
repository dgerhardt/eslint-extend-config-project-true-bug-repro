import { defineConfig } from "eslint/config";
import baseConfig from './eslint.config.mjs';

export default defineConfig([
  {
    extends: baseConfig,
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
]);
