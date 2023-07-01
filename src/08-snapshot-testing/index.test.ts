// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // Write your test here
    const element = 1;

    const expected = {
      value: element,
      next: {
        value: null,
        next: null
      }
    }
    
    const result = generateLinkedList([element]);
    expect(result).toStrictEqual(expected);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const element = 1;

    const expected = {
      value: element,
      next: {
        value: null,
        next: null
      }
    }
    
    const result = generateLinkedList([element]);
    expect(result).toMatchSnapshot(expected);
  });
});
