import { EmailService } from './email.service';
export declare class EmailController {
    private readonly service;
    constructor(service: EmailService);
    parse(path: string): Promise<any>;
}
