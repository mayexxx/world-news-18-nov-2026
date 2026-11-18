import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = process.env.MAKEFUN_OUTPUT_DIR || '/output';
await mkdir(destination, { recursive: true });
await copyFile(source, join(destination, 'entry.png'));
