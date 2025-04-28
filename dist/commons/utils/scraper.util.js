"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScraperUtil = void 0;
const axios_1 = require("axios");
const cheerio = require("cheerio");
class ScraperUtil {
    async fetchJsonFromUrl(url) {
        const response = await axios_1.default.get(url);
        return response.data;
    }
    async findJsonLinkInPage(url) {
        const response = await axios_1.default.get(url);
        const $ = cheerio.load(response.data);
        const href = $('a[href*="json"]').attr('href');
        return href ? new URL(href, url).href : null;
    }
}
exports.ScraperUtil = ScraperUtil;
//# sourceMappingURL=scraper.util.js.map