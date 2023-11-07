const { frutas, dinero } = require('./frutas');
const chalk = require('chalk');



frutas.forEach((fruta, index) => {
  console.log(index, fruta);
});
console.log(chalk.red(dinero));



  // versionado de proyectos:  MAJOR.MINOR.PATCH   SEMANTIC VERSIONING

  // npm init -y   es como decir yes a todo
