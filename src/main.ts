import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //设置全局过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());
  //设置全局管道
  //app.useGlobalPipes(new ValidationPipe());

  //设置swagger文档配置
  // const swaggerOptions = new DocumentBuilder()
  //   .setTitle('nest-starter api Document')
  //   .setDescription('nest starter project api document')
  //   .setVersion('1.0')
  //   .addBasicAuth()
  //   .build();
  // const document = SwaggerModule.createDocument(app, swaggerOptions);
  // SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();
