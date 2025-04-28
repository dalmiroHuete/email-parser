"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentExtractor = void 0;
const abstract_extractor_1 = require("../abstract/abstract-extractor");
class AttachmentExtractor extends abstract_extractor_1.AbstractExtractor {
    async extract(email) {
        const jsonAttachment = email.attachments?.find((attachment) => attachment.contentType === 'application/json');
        return jsonAttachment
            ? JSON.parse(jsonAttachment.content.toString())
            : null;
    }
}
exports.AttachmentExtractor = AttachmentExtractor;
//# sourceMappingURL=attachment.extractor.js.map