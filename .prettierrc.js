module.exports = {
  // Basic Prettier settings
  semi: true,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  endOfLine: "lf",
  singleQuote: false,

  // Plugin configuration
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // Import sorting configuration (Trivago)
  importOrder: [
    "^react$",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  // Tailwind CSS class sorting
  tailwindFunctions: ["cn", "clsx", "cva"],
  tailwindAttributes: ["className", "class"],
};
