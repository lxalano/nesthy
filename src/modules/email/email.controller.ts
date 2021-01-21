import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emilService: EmailService) { }
    @Get()
    sendEmail(): string {
        this.emilService.sendEmail();
        return 'ok';

    }
}
