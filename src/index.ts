import { Sort } from './Sort';
import { BubbleSort } from './BubbleSort';
import { MergeSort } from './MergeSort'

const sort = new Sort([40, 24, 13, 1, 69, 56, 77, 3, 2, 7], new MergeSort());
console.log(sort.logic());