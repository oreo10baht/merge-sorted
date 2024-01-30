import { merge } from '../src/merge-sorted';

describe('merge-sorted', () => {
  it('test1', () => {
    const result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('test2:empty array', () => {
    const result = merge([], [2, 4, 6]);
    expect(result).toEqual([2, 4, 6]);
  });
  it('test3:empty arrays', () => {
    const result = merge([], []);
    expect(result).toEqual([]);
  });
  it('test4: 1st array length is longer than 2nd', () => {
    const result = merge([1,2,3,4], [2,5,6]);
    expect(result).toEqual([1,2,2,3,4,5,6]);
  });
  it('test5: 2nd array length is longer than 1st', () => {
    const result = merge([1,2,3,4], [0,2,5,6,9]);
    expect(result).toEqual([0,1,2,2,3,4,5,6,9]);
  });
  it('test6: large arrays', () => {
    const array1 = Array.from({ length: 6000 }, (_, i) => i * 2);
    const array2 = Array.from({ length: 5000 }, (_, i) => i * 3);
    const result = merge(array1, array2);
    const expected = [...array1, ...array2].sort((a, b) => a - b);
    expect(result).toEqual(expected);
  });


});
