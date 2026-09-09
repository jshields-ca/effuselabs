import js from '@eslint/js'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'

/**
 * eslint-config-next v16 ships native flat config, so it spreads in directly.
 * Two things follow from that and are easy to get wrong:
 *
 *  - Do NOT wrap it in FlatCompat. The bridge fails on it with a
 *    "Converting circular structure to JSON" error.
 *  - Do NOT re-register `jsx-a11y`, `@typescript-eslint`, `react`,
 *    `react-hooks` or `import`. It already provides all of them, and flat
 *    config rejects a redefined plugin. Only override rules below.
 */
const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'coverage/**',
      'playwright-report/**',
      'test-results/**',
      'next-env.d.ts',
      // Background-agent worktrees (see .gitignore) — full nested checkouts
      // of the repo, not project content. Without this, `eslint .` recurses
      // into them and reports thousands of unrelated errors.
      '.claude/**',
    ],
  },

  js.configs.recommended,
  ...nextCoreWebVitals,

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // `: any` is how required database fields silently went missing in the
      // sibling Lumina codebase. It is an error here, not a warning.
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',

      // TypeScript already resolves these; the base rule reports false
      // positives on type-only and JSX identifiers.
      'no-undef': 'off',
      'no-unused-vars': 'off',

      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
    },
  },

  // Node scripts and CommonJS config files run outside the bundler.
  {
    files: ['**/*.mjs', '**/*.config.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
        module: 'writable',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },
  },

  // Must stay last: turns off every rule that fights Prettier.
  prettierConfig,
]

export default config
