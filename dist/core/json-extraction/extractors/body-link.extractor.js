"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyLinkExtractor = void 0;
const abstract_extractor_1 = require("../abstract/abstract-extractor");
const constants_1 = require("../../../commons/constants/constants");
class BodyLinkExtractor extends abstract_extractor_1.AbstractExtractor {
    constructor(scraper) {
        super();
        this.scraper = scraper;
    }
    async extract(email) {
        const matches = email.text?.match(constants_1.JSON_LINK_REGEX);
        const link = matches ? matches[0] : null;
        if (link)
            return this.scraper.fetchJsonFromUrl(link);
        return null;
    }
}
exports.BodyLinkExtractor = BodyLinkExtractor;
//# sourceMappingURL=body-link.extractor.js.map