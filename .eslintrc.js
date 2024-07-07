module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/essential',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false,
    },
    rules: {
      'vue/no-unused-vars': 'error',
      'vue/no-multiple-template-root': 'off', // Desativa a regra no-multiple-template-root
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  };
  