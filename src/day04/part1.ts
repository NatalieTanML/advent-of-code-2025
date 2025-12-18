import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day04');
  const matrix = input.split('\n').map((row) => row.split(''));
  let canAccess = 0;

  // prettier-ignore
  const dirs = [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0],          [1, 0],
    [-1, 1], [0, 1], [1, 1],
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const curr = matrix[i][j];
      if (curr !== '@') {
        continue;
      }

      // check the surrounding 8 positions
      let count = 0;
      for (const [di, dj] of dirs) {
        let check = matrix[i + di]?.[j + dj];
        count += check === '@' ? 1 : 0;
      }

      if (count < 4) canAccess++;
    }
  }

  console.log(canAccess);
  return canAccess;
}

part1();
