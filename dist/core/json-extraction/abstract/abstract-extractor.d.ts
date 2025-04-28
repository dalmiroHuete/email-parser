import { JsonExtractor } from '../interfaces/json-extractor.interface';
import { Chainable } from '../interfaces/chainable.interface';
import { ParsedMail } from 'mailparser';
export declare abstract class AbstractExtractor implements JsonExtractor, Chainable {
    private next;
    setNext(handler: Chainable): Chainable;
    handle(email: ParsedMail): Promise<any | null>;
    abstract extract(email: any): Promise<any | null>;
}
