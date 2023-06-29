// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    const value: string = 'test record';
    const result: unknown = await resolveValue(value);
    expect(result).toBe('test record');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    const value: string = 'test for Error';

    try {
      throwError(value)
    } catch (e) {
      const msg: string = (e as Error).message;
      expect(msg).toEqual('test for Error');
    }
    
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    try {
      throwError();
    } catch (err) {
      const msg: string = (<Error>err).message;
      expect(msg).toEqual('Oops!');
    }    
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
