import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day09').split('\n');
  const coords = input.map((row) => row.split(',').map(Number));
  let largest = 0;

  // not optimized but my pea brain can't think of a faster algorithm
  for (let i = 0; i < coords.length; i++) {
    for (let j = i + 1; j < coords.length; j++) {
      const area =
        (Math.abs(coords[j][1] - coords[i][1]) + 1) *
        (Math.abs(coords[j][0] - coords[i][0]) + 1);
      if (area > largest) {
        largest = area;
      }
    }
  }

  console.log(largest);
  return largest;
}

part1();
