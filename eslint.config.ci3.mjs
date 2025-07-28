import tseslint from 'typescript-eslint';
import baseConfig from './eslint.config.mjs';

export default tseslint.config(
  baseConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
);
