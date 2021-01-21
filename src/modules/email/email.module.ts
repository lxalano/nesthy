import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [EmailController],
    providers: [
        EmailService,],
})
export class EmailModule { }
