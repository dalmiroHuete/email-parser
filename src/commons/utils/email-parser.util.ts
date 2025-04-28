import { readFile } from 'fs/promises';
import { simpleParser } from 'mailparser';

export class EmailParserUtil {
  static async parse(path: string) {
    const buffer = await readFile(path);
    return simpleParser(buffer);
  }
}
