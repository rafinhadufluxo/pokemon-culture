# pokemon-culture

use https://pokeapi.co/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Don't forget to put .eslint in the root of the project, copy this code below
```
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
  
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
