const { frutas, dinero } = require('./frutas');

frutas.forEach((fruta, index) => {
  console.log(index, fruta);
});
console.log((dinero.toLocaleString('en-US', { style: 'currency', currency: 'USD' })));



  // versionado de proyectos:  MAJOR.MINOR.PATCH   SEMANTIC VERSIONING

  // npm init -y   es como decir yes a todo
