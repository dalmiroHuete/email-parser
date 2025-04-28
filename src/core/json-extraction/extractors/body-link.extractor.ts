import { AbstractExtractor } from '../abstract/abstract-extractor';
import { ScraperUtil } from '../../../commons/utils/scraper.util';
import { JSON_LINK_REGEX } from '../../../commons/constants/constants';
import { ParsedMail } from 'mailparser';

export class BodyLinkExtractor extends AbstractExtractor {
  constructor(private scraper: ScraperUtil) {
    super();
  }

  async extract(email: ParsedMail): Promise<any | null> {
    const matches = email.text?.match(JSON_LINK_REGEX);
    const link = matches ? matches[0] : null;

    if (link) return this.scraper.fetchJsonFromUrl(link);

    return null;
  }
}
