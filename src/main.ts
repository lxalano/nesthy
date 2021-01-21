import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
