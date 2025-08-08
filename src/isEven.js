
/**
 * Verifica si un número es par o casi par.
 * @param {number} num - El número a verificar.
 * @returns {"par" | "casi par" | "impar"}
 */
export function isEven(num) {
  if (num % 2 === 0) {
    return 'par';
  }

  const decimal = num % 1;
  const ending = Math.round(decimal * 10);

  if ([ 2, 4, 6, 8].includes(ending)) {
    return 'casi par';
  }

  return 'impar';
}
