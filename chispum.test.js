
const {obtenerNumero} = require ("./chispum")/* importacion de la funcion */

describe('probando multiplos', () => {

  test('multiplo de 3 y 5 = CHISPUM', () => {
    expect(obtenerNumero(15)).toBe("multiplo de 3 y 5 = chispum");
  });

  test('multiplo de 3 = CHIS', () => {
    expect(obtenerNumero(9)).toBe("Multiplo de 3 = chis");
  });

  test('multiplo de 5 = PUM', () => {
    expect(obtenerNumero(5)).toBe("Multiplo de 5 = pum");
  });
});

