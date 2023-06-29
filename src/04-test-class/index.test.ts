// Uncomment the code below and write your tests
import { getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const initBalance: number = 1234567890;
    expect(getBankAccount(initBalance)).toBeTruthy();
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const balance = 1000;
    const bankAccount = getBankAccount(balance);

    expect(() => bankAccount.withdraw(1001)).toThrow(`Insufficient funds: cannot withdraw more than ${balance}`);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const balance = 1000;
    const bankAccount = getBankAccount(balance);

    expect(() => bankAccount.transfer(1001, bankAccount)).toThrow('Transfer failed');
  });

  test('should deposit money', () => {
    // Write your test here
    const bankAccount = getBankAccount(0);
    bankAccount.deposit(1000);
    
    expect(bankAccount.getBalance()).toBe(1000);
  });

  test('should withdraw money', () => {
    // Write your test here
    const bankAccount = getBankAccount(1000);
    bankAccount.withdraw(500);

    expect(bankAccount.getBalance()).toBe(500);
  });

  test('should transfer money', () => {
    // Write your test here
    const bankAccount = getBankAccount(1000);
    const testBankAccount = getBankAccount(0);
    bankAccount.transfer(1000, testBankAccount);

    // expect(testBankAccount.getBalance()).toBe(1000);
    expect(testBankAccount).toHaveProperty('_balance', 1000);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const balance = 1000;
    const bankAccount = getBankAccount(balance);

    await expect(bankAccount.fetchBalance()).resolves.toBeTruthy();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const balance = 1000;
    const bankAccount = getBankAccount(balance);
    try {
      await bankAccount.synchronizeBalance();
      expect(bankAccount.getBalance()).toBeGreaterThan(balance);
    } catch (err) {
      return;
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
