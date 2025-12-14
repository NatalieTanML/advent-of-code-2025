import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day04');
  const matrix = input.split('\n').map((row) => row.split(''));
  let canAccess = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const curr = matrix[i][j];

      if (curr === '@') {
        // check the surrounding 8 positions
        let count = 0;
        for (let k = i - 1; k <= i + 1; k++) {
          for (let l = j - 1; l <= j + 1; l++) {
            if (k === i && l === j) continue;
            let check = matrix[k]?.[l] ?? '.';
            count += check === '@' ? 1 : 0;
          }
        }

        if (count < 4) canAccess++;
      }
    }
  }

  console.log(canAccess);
  return canAccess;
}

part1();
