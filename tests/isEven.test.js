
import { describe, test, expect } from 'vitest';
import { isEven } from '../src/isEven.js';

describe('isEven', () => {
  test('detecta un número par', () => {
    expect(isEven(8)).toBe('par');
  });

  test('detecta un número impar', () => {
    expect(isEven(7)).toBe('impar');
  });

  test('detecta un "casi par"', () => {
    expect(isEven(3.6)).toBe('casi par');
  });

  test('detecta que 2.0 sigue siendo par', () => {
    expect(isEven(2.0)).toBe('par');
  });
});
