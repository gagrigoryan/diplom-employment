/** @type {import("prettier").Options} */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['cn', 'clsx', 'cva'],
  trailingComma: 'es5',
  useTabs: false,
};
