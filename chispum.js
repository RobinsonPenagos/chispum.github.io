function obtenerNumero(num) {
    if (num % 5 === 0 && num % 3 === 0) {
      return "multiplo de 3 y 5 = chispum";
    } else if (num % 3 === 0) {
      return "Multiplo de 3 = chis";
    } else if (num % 5 === 0) {
      return "Multiplo de 5 = pum";
    }else {
      return "El numero no es multiplo de 3 0 5 ";
    }
  }
  
  module.exports = { obtenerNumero }; /* exportar la funcion */
  