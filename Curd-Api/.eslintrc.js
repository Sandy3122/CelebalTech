module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    $: true,
    require: true,
    process: true,
  },
  rules: {
    "consistent-return": "error",
    "treatUndefinedAsUnspecified": false, //for arrow functions error
  },
  settings: {
    noInlineConfig: true,
    node: {
      tryExtensions: [".js", ".ts", ".d.ts"],
      moduleDirectory: ["node_modules", "src/"]
    },
  }
};
