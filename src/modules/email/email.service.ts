import { Injectable } from '@nestjs/common';
import { ScraperUtil } from '../../commons/utils/scraper.util';
import { EmailParserUtil } from '../../commons/utils/email-parser.util';
import { AttachmentExtractor } from '../../core/json-extraction/extractors/attachment.extractor';
import { BodyLinkExtractor } from '../../core/json-extraction/extractors/body-link.extractor';
import { ScrapingExtractor } from '../../core/json-extraction/extractors/scraping.extractor';

@Injectable()
export class EmailService {
  private scraper = new ScraperUtil();

  async parseEmail(path: string) {
    const email = await EmailParserUtil.parse(path);

    const attachment = new AttachmentExtractor();
    const bodyLink = new BodyLinkExtractor(this.scraper);
    const scrape = new ScrapingExtractor(this.scraper);

    attachment.setNext(bodyLink).setNext(scrape);

    const result = await attachment.handle(email);
    if (!result) throw new Error('Failed to locate a JSON object in the email');

    return result;
  }
}
