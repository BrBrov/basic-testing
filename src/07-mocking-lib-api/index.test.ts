// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {

  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());

  test('should create instance with provided base url', async () => {
    // Write your test here
    jest.spyOn(axios.Axios.prototype, 'get').mockResolvedValue({ data: true });
    const watcher = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi('/test');

    expect(watcher).toBeCalledWith({ baseURL: 'https://jsonplaceholder.typicode.com' });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
    const watcher = jest.spyOn(axios.Axios.prototype, 'get').mockResolvedValue({ data: true });

    throttledGetDataFromApi('/test');

    jest.runAllTimers();
    
    expect(watcher).toBeCalledWith('/test');
  });

  test('should return response data', async () => {
    // Write your test here
    jest.spyOn(axios.Axios.prototype, 'get').mockResolvedValue({ data: true });

    const result = await throttledGetDataFromApi('/test');

    expect(result).toBe(true);
  });
});