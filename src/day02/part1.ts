import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day02');
  const ranges = input.split(',').map(String);
  let sum = 0;
  for (const range of ranges) {
    const [start, end] = range.split('-', 2).map(Number);
    for (let num = start; num <= end; num++) {
      const numLen = num.toString().length;
      if (numLen % 2 === 0) {
        const numStr = num.toString();
        if (
          numStr.substring(0, numLen / 2) ===
          numStr.substring(numLen / 2, numLen)
        ) {
          sum += num;
        }
      }
    }
  }
  console.log('sum:', sum);
  return sum;
}

part1();
