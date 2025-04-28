import { AbstractExtractor } from '../abstract/abstract-extractor';
import { ParsedMail } from 'mailparser';
export declare class AttachmentExtractor extends AbstractExtractor {
    extract(email: ParsedMail): Promise<any | null>;
}
