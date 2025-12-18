import { readInput } from '../utils/readInput';

export function part2(): number {
  const input = readInput('day05').split('\n\n', 2);
  const ranges = input[0]
    .split('\n')
    .map((line) => line.split('-', 2).map(Number))
    .toSorted((a, b) => a[0] - b[0]);

  const mergedRanges = [ranges.shift()!];
  let numFresh = 0;

  for (const range of ranges) {
    const lastMerge = mergedRanges[mergedRanges.length - 1];
    if (lastMerge[1] >= range[0]) {
      lastMerge[1] = Math.max(lastMerge[1], range[1]);
    } else {
      mergedRanges.push(range);
    }
  }

  for (const merged of mergedRanges) {
    numFresh += merged[1] - merged[0] + 1;
  }

  console.log(numFresh);
  return numFresh;
}

part2();
