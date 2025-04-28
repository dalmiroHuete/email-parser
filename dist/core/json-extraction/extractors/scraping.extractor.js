"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapingExtractor = void 0;
const abstract_extractor_1 = require("../abstract/abstract-extractor");
const constants_1 = require("../../../commons/constants/constants");
class ScrapingExtractor extends abstract_extractor_1.AbstractExtractor {
    constructor(scraper) {
        super();
        this.scraper = scraper;
    }
    async extract(email) {
        const match = email.text?.match(constants_1.LINK_TO_WEBSITE);
        if (match) {
            const jsonUrl = await this.scraper.findJsonLinkInPage(match[0]);
            if (jsonUrl)
                return this.scraper.fetchJsonFromUrl(jsonUrl);
        }
        return null;
    }
}
exports.ScrapingExtractor = ScrapingExtractor;
//# sourceMappingURL=scraping.extractor.js.map