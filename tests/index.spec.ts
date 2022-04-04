import 'mocha';
import { expect } from 'chai';
import { Sort } from '../src/Sort';
import { BubbleSort } from '../src/BubbleSort';
import { MergeSort } from '../src/MergeSort';

describe('Sort class tests', () => {
  let sort: Sort = new Sort([12, 11, 10, 4, 3, 22, 99, 1, 6], new BubbleSort());

  it('BubbleSort[12, 11, 10, 4, 3, 22, 99, 1, 6] returns [1, 3, 4, 6, 10, 11, 12, 22, 99]', () => {
    expect(sort.logic()).to.be.eql([1, 3, 4, 6, 10, 11, 12, 22, 99]);
  });

  it('MergeSort[40, 24, 13, 1, 69, 56, 77, 3, 2, 7] returns []' , () => {
    sort.setData([40, 24, 13, 1, 69, 56, 77, 3, 2, 7]);
    sort.setStrategy(new MergeSort())
    expect(sort.logic()).to.be.eql([1, 2, 3, 7, 13, 24, 40, 56, 69, 77]);
  });
});