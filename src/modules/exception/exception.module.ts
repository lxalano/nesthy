import { ExceptionController } from './exception.controller';
import { ExceptionService } from './exception.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [ExceptionController],
    providers: [ExceptionService],
})
export class ExceptionModule { }
