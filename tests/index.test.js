
import { describe, expect, test } from 'vitest';
import { sum } from '../src/index.js';

describe('sum', () => {
  test('  suma dos números correctamente', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('suma varios números', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test('lanza error si no se pasa ningún argumento', () => {
    expect(() => sum()).toThrow('Debe proporcionar al menos un número para sumar.');
  });
});

