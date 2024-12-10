/** @type { import('stylelint').Config } */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "layer", "apply", "config"],
      },
    ],
    "function-no-unknown": [true, { ignoreFunctions: ["theme", "screen"] }],
    "no-descending-specificity": null,
  },
};
