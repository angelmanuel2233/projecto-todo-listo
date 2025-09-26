import { expect, test } from 'vitest';
import { increment, decrement, reset } from './main';

let count = 0;

test('increment should increase count by 1', () => {
  count = increment(count);
  expect(count).toBe(1);
});

test('decrement should decrease count by 1', () => {
  count = decrement(count);
  expect(count).toBe(0);
});

test('reset should set count to 0', () => {
  count = reset(count);
  expect(count).toBe(0);
});