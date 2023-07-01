// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const data = {
      a: 1,
      b: 2,
      action: Action.Add,
    };

    expect(simpleCalculator(data)).toBe(3);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const data = {
      a: 4,
      b: 2,
      action: Action.Subtract,
    };

    expect(simpleCalculator(data)).toBe(2);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const data = {
      a: 2,
      b: 2,
      action: Action.Multiply,
    };

    expect(simpleCalculator(data)).toBe(4);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const data = {
      a: 6,
      b: 2,
      action: Action.Divide,
    };

    expect(simpleCalculator(data)).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const data = {
      a: 2,
      b: 2,
      action: Action.Add,
    };

    expect(simpleCalculator(data)).toBe(4);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const data = {
      a: 1,
      b: 2,
      action: 'non action',
    };

    expect(simpleCalculator(data)).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const data = {
      a: 'one',
      b: 'null',
      action: 'delete',
    };

    expect(simpleCalculator(data)).toBeNull();
  });
});
