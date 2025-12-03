import { readFileSync } from 'fs';
import { join } from 'path';

export function readInput(day: string): string {
  const filePath = join(__dirname, `../${day}/input.txt`);
  return readFileSync(filePath, 'utf-8').trim();
}
