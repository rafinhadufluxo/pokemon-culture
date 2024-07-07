const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pokemon-culture/' // substitua "nome-do-repositorio" pelo nome do seu repositório
    : '/'
});
