import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day03');
  const banks = input.split('\n').map(String);
  let totalJoltage = 0;

  for (const bank of banks) {
    const batteries = bank.split('').map(Number);
    let found = false;

    while (!found) {
      for (let first = 9; first > 0; first--) {
        const firstIndex = batteries.indexOf(first);
        if (firstIndex < 0) {
          continue;
        }

        for (let second = 9; second > 0; second--) {
          const secondIndex = batteries.indexOf(second, firstIndex + 1);
          if (secondIndex < 0) {
            continue;
          }
          totalJoltage += first * 10 + second;
          found = true;
          break;
        }
        if (found) break;
      }
    }
  }

  console.log('totalJoltage:', totalJoltage);
  return totalJoltage;
}

part1();
