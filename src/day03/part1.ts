import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day03');
  const banks = input.split('\n').map(String);
  let totalJoltage = 0;

  for (const bank of banks) {
    const batteries = bank.split('').toSorted().reverse();
    const first = batteries[0];
    const second = batteries[1];
    if (first === second) {
      totalJoltage += parseInt(first + second);
    } else {
      const firstIndex = bank.indexOf(first);
      const secondIndex = bank.indexOf(second);
      if (firstIndex < secondIndex) {
        totalJoltage += parseInt(first + second);
      } else {
        totalJoltage += parseInt(second + first);
      }
    }
  }

  console.log('totalJoltage:', totalJoltage);
  return totalJoltage;
}

part1();
