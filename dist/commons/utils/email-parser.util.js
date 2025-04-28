"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailParserUtil = void 0;
const promises_1 = require("fs/promises");
const mailparser_1 = require("mailparser");
class EmailParserUtil {
    static async parse(path) {
        const buffer = await (0, promises_1.readFile)(path);
        return (0, mailparser_1.simpleParser)(buffer);
    }
}
exports.EmailParserUtil = EmailParserUtil;
//# sourceMappingURL=email-parser.util.js.map