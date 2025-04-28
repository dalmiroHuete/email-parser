import { AbstractExtractor } from '../abstract/abstract-extractor';
import { ScraperUtil } from '../../../commons/utils/scraper.util';
import { LINK_TO_WEBSITE } from '../../../commons/constants/constants';
import { ParsedMail } from 'mailparser';

export class ScrapingExtractor extends AbstractExtractor {
  constructor(private scraper: ScraperUtil) {
    super();
  }

  async extract(email: ParsedMail): Promise<any | null> {
    const match = email.text?.match(LINK_TO_WEBSITE);
    if (match) {
      const jsonUrl = await this.scraper.findJsonLinkInPage(match[0]);
      if (jsonUrl) return this.scraper.fetchJsonFromUrl(jsonUrl);
    }
    return null;
  }
}
