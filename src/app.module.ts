import { ExceptionModule } from './modules/exception/exception.module';
import { MiddlewareConsumer, Module, Patch, RequestMethod } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';


@Module({
  imports: [
    ExceptionModule, HelloModule],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    //为hello路由添加中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('hello');
  }
}
