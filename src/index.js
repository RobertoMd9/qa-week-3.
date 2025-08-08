
/**
 * Suma cualquier cantidad de números.
 * @param  {...number} numbers - Lista de números a sumar.
 * @returns {number} La suma total.
 */
export function sum(...numbers) {
  if (numbers.length === 0) {
    throw new Error('Debe proporcionar al menos un número para sumar.');
  }
  return numbers.reduce((total, current) => total + current, 0);
}
