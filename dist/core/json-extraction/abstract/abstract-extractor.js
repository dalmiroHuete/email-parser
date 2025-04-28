"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractExtractor = void 0;
class AbstractExtractor {
    constructor() {
        this.next = null;
    }
    setNext(handler) {
        this.next = handler;
        return handler;
    }
    async handle(email) {
        const result = await this.extract(email);
        if (result)
            return result;
        if (this.next) {
            return this.next.handle(email);
        }
        return null;
    }
}
exports.AbstractExtractor = AbstractExtractor;
//# sourceMappingURL=abstract-extractor.js.map