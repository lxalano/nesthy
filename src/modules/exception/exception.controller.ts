import { Body, Controller, Delete, Get, Header, HttpCode, Param, Patch, Post, Query, Headers, HttpException, HttpStatus, UseFilters, ParseIntPipe } from '@nestjs/common';
import { ExceptionService } from './exception.service';
import { HttpExceptionFilter } from '../../common/filters/http-exception.filter';


@UseFilters(new HttpExceptionFilter())
@Controller('exception')
export class ExceptionController {

    constructor(private readonly helloService: ExceptionService) { }

    @Get()
    fetch(@Query() { id }, @Headers('token') token): string {
        if (!id) {
            throw new HttpException(
                { status: HttpStatus.BAD_REQUEST, message: '请求id参数必传', error: 'id is requred' },
                HttpStatus.BAD_REQUEST,
            );
        }
        console.log(token);
        return this.helloService.fatch(id);
    }


    // @Get()
    // @Redirect('https://www.baidu.com', 302)
    //创建
    @Post()
    @HttpCode(201)
    @Header('Cache-Control', 'none')
    create(@Query() { id }, @Body() { message }): string {
        console.log(id)
        return this.helloService.create(message);
    }
    //更新
    @Patch(':id')
    //使用nestjs 自带的管道
    update(@Param('id', new ParseIntPipe()) id, @Body() { message }): string {
        console.log(typeof id)
        return this.helloService.update(id, message);
    }
    //删除
    @Delete()
    remove(@Query() { id }): string {
        return this.helloService.remove(id);
    }
}
