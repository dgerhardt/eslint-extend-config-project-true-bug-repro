import eslint from '@eslint/js';
import eslintTypescript from 'typescript-eslint';

export default eslintTypescript.config(
  eslint.configs.recommended,
  ...eslintTypescript.configs.recommended,
  {
    ignores: ['**/*.d.ts', 'dist/**'],
  },
  {
    languageOptions: {
      parser: eslintTypescript.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: true,
        sourceType: 'module',
      },
    }
  }
);
