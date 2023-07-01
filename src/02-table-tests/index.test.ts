// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  // continue cases for other actions
  //Substract
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 6, b: 4, action: Action.Subtract, expected: 2 },
  // Multiply
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 5, b: 5, action: Action.Multiply, expected: 25 },
  { a: 5, b: 10, action: Action.Multiply, expected: 50 },
  //Divide
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 10, b: 10, action: Action.Divide, expected: 1 },
  { a: 33, b: 3, action: Action.Divide, expected: 11 },
  // Exponentiate
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  // test('should blah-blah', () => {
  //   expect(true).toBe(true);
  // });
  // Consider to use Jest table tests API to test all cases above
  test.each(testCases)(`Test all operations`, ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  });
});
