import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('formats first ordinal', () => {
  assert.equal(api.ordinal(1), '1st');
});
test('formats second and third', () => {
  assert.equal(api.ordinal(2), '2nd');
  assert.equal(api.ordinal(3), '3rd');
});
test('handles teen exceptions', () => {
  assert.equal(api.ordinal(11), '11th');
  assert.equal(api.ordinal(112), '112th');
});
test('handles negative integers', () => {
  assert.equal(api.ordinal(-21), '-21st');
});
test('handles zero and round tens', () => {
  assert.equal(api.ordinal(0), '0th');
  assert.equal(api.ordinal(20), '20th');
});
test('rejects fractional values', () => {
  assert.throws(() => api.ordinal(1.5), RangeError);
});
