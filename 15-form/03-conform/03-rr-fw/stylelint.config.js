/** @type { import('stylelint').Config } */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-tailwindcss",
  ],
  rules: {
    "at-rule-no-deprecated": [true, { ignoreAtRules: ["apply"] }],
  },
};
