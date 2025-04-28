import { JsonExtractor } from '../interfaces/json-extractor.interface';
import { Chainable } from '../interfaces/chainable.interface';
import { ParsedMail } from 'mailparser';

export abstract class AbstractExtractor implements JsonExtractor, Chainable {
  private next: Chainable | null = null;

  setNext(handler: Chainable): Chainable {
    this.next = handler;
    return handler;
  }

  async handle(email: ParsedMail): Promise<any | null> {
    const result = await this.extract(email);
    if (result) return result;

    if (this.next) {
      return this.next.handle(email);
    }

    return null;
  }

  abstract extract(email: any): Promise<any | null>;
}
