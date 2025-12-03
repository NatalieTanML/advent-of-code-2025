import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day01');
  const numbers = input.split('\n').map(String);

  let count = 0;
  let currNum = 50;
  for (const num of numbers) {
    const dir = num[0];
    const rotations = parseInt(num.slice(1), 10);
    if (dir === 'L') {
      currNum -= rotations;
    } else if (dir === 'R') {
      currNum += rotations;
    }
    currNum = (currNum + 100) % 100;

    if (currNum === 0) {
      count++;
    }
  }
  console.log(count);
  return count;
}

part1();
