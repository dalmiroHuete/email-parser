import axios from 'axios';
import * as cheerio from 'cheerio';

export class ScraperUtil {
  async fetchJsonFromUrl(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  async findJsonLinkInPage(url: string): Promise<string | null> {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const href = $('a[href*="json"]').attr('href');
    return href ? new URL(href, url).href : null;
  }
}
