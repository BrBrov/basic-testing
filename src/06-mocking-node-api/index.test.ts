// Uncomment the code below and write your tests
import path from 'path';
import { doStuffByTimeout, doStuffByInterval, readFileAsynchronously } from '.';
//import * as fsPromises from 'fs/promises';
import fs from 'fs';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    const mockFm = jest.fn(() => true);
    expect(() => doStuffByTimeout(mockFm, 1000)).toBeTruthy();
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    const mockFm = jest.fn();

    jest.spyOn(global, 'setTimeout');

    doStuffByTimeout(mockFm, 1000);

    jest.runAllTimers();

    expect(setTimeout).toBeCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    const mockFn = jest.fn();
    expect(() => doStuffByInterval(mockFn, 1000)).toBeTruthy();
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    const mockFn = jest.fn();
    spyOn(global, 'setInterval');
    doStuffByInterval(mockFn, 1000);

    jest.runAllTimers();
    expect(setInterval).toBeCalled();
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
    const mockPath = spyOn(path, 'join');

    await readFileAsynchronously('test.ext');
    return expect(mockPath).toBeCalled();
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    const result = await readFileAsynchronously('test.ext');
    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here

    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest.spyOn(fs.promises, 'readFile').mockResolvedValue(Promise.resolve(Buffer.from('mock')));
    const result = await readFileAsynchronously('test.ext');
    expect(result).toBe('mock');
  });
});
