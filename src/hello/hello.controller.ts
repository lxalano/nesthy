import { Controller, Get, Query, Headers } from '@nestjs/common';
import { get } from 'http';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(private readonly helloService: HelloService) { }

    @Get()
    fetch(@Query() { id }, @Headers('token') token): string {
        console.log(token);
        return this.helloService.fatch(id);
    }
}
