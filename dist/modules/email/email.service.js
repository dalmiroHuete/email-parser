"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const scraper_util_1 = require("../../commons/utils/scraper.util");
const email_parser_util_1 = require("../../commons/utils/email-parser.util");
const attachment_extractor_1 = require("../../core/json-extraction/extractors/attachment.extractor");
const body_link_extractor_1 = require("../../core/json-extraction/extractors/body-link.extractor");
const scraping_extractor_1 = require("../../core/json-extraction/extractors/scraping.extractor");
let EmailService = class EmailService {
    constructor() {
        this.scraper = new scraper_util_1.ScraperUtil();
    }
    async parseEmail(path) {
        const email = await email_parser_util_1.EmailParserUtil.parse(path);
        const attachment = new attachment_extractor_1.AttachmentExtractor();
        const bodyLink = new body_link_extractor_1.BodyLinkExtractor(this.scraper);
        const scrape = new scraping_extractor_1.ScrapingExtractor(this.scraper);
        attachment.setNext(bodyLink).setNext(scrape);
        const result = await attachment.handle(email);
        if (!result)
            throw new Error('Failed to locate a JSON object in the email');
        return result;
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)()
], EmailService);
//# sourceMappingURL=email.service.js.map