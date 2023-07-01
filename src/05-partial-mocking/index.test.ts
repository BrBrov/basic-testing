// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');

  return {
    __esModule: true,
    ...originalModule,
    mockOne: () => 1,
    mockTwo: () => 2,
    mockThree: () => 3,
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    const watcher = jest.spyOn(console, 'log');

    mockOne();
    mockTwo();
    mockThree();

    expect(watcher).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
    const watcher = jest.spyOn(console, 'log');
    unmockedFunction();

    expect(watcher).toHaveBeenCalled();
  });
});
