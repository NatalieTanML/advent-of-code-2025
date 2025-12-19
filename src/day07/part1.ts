import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day07').split('\n');
  let splits = 0;

  // keep track of splitters and beams' indexes in each row
  // splitters: 2d array of splitter indexes
  const splitters = input.map((row) => {
    const indexes: number[] = [];
    const rowChars = row.split('');
    let idx = -1;
    while ((idx = rowChars.indexOf('^', idx + 1))) {
      if (idx === -1) break;
      indexes.push(idx);
    }
    return indexes;
  });

  // beams: array of set of beam indexes
  const starting = input[0].indexOf('S');
  const beams: Set<number>[] = [new Set([starting]), new Set([starting])]; // beams travel straight down
  // can start from row 2 where we encounter a splitter
  for (let i = 2; i < input.length; i++) {
    const currRowBeams = new Set<number>();
    const prevRowBeams = beams[i - 1];
    for (const prevBeam of prevRowBeams) {
      if (splitters[i].some((splitter) => splitter === prevBeam)) {
        currRowBeams.add(prevBeam - 1);
        currRowBeams.add(prevBeam + 1);
        splits++;
      } else {
        currRowBeams.add(prevBeam);
      }
    }
    beams.push(currRowBeams);
  }

  console.log(splits);
  return splits;
}

part1();
