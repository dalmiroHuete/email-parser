import { AbstractExtractor } from '../abstract/abstract-extractor';
import { ParsedMail } from 'mailparser';

export class AttachmentExtractor extends AbstractExtractor {
  async extract(email: ParsedMail): Promise<any | null> {
    const jsonAttachment = email.attachments?.find(
      (attachment) => attachment.contentType === 'application/json',
    );

    return jsonAttachment
      ? JSON.parse(jsonAttachment.content.toString())
      : null;
  }
}
