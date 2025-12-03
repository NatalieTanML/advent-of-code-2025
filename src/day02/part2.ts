import { readInput } from '../utils/readInput';

export function part2(): number {
  const input = readInput('day02');
  const ranges = input.split(',').map(String);
  let sum = 0;
  const nums = new Set<number>();

  for (const range of ranges) {
    const [start, end] = range.split('-', 2).map(Number);
    for (let num = start; num <= end; num++) {
      const numStr = num.toString();
      const prefixes = [...numStr]
        .slice(0, Math.floor(numStr.length / 2))
        .map((_, i) => numStr.slice(0, i + 1));

      for (const prefix of prefixes) {
        const count = numStr.split(prefix).length - 1;
        if (count * prefix.length === numStr.length) {
          nums.add(num);
        }
      }
    }
  }
  for (const num of nums) {
    sum += num;
  }
  console.log('sum:', sum);
  return sum;
}

part2();
