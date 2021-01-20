import { Controller, Get, Query, Headers, Post, HttpCode, Body, Patch } from '@nestjs/common';
import { MESSAGES } from '@nestjs/core/constants';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(private readonly helloService: HelloService) { }
    //查询
    @Get()
    fetch(@Query() { id }, @Headers('token') token): string {
        console.log(token);
        return this.helloService.fatch(id);
    }
    //创建
    @Post()
    @HttpCode(201)
    create(@Query() { id }, @Body() { message }): string {
        console.log(id)
        return this.helloService.create(message);
    }
    //更新
    @Patch(': id')
    update(@Query() { id }, @Body() { message }): string {
        return this.helloService.update(id, message);
    }


}
