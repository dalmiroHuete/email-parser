import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly service: EmailService) {}

  @Get('parse')
  async parse(@Query('path') path: string) {
    return this.service.parseEmail(path);
  }
}
