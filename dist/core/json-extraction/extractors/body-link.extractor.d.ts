import { AbstractExtractor } from '../abstract/abstract-extractor';
import { ScraperUtil } from '../../../commons/utils/scraper.util';
import { ParsedMail } from 'mailparser';
export declare class BodyLinkExtractor extends AbstractExtractor {
    private scraper;
    constructor(scraper: ScraperUtil);
    extract(email: ParsedMail): Promise<any | null>;
}
