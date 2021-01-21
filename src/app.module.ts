import * as path from 'path';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { MiddlewareConsumer, Module, Patch, RequestMethod } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MailerModule, PugAdapter } from '@nest-modules/mailer';
import { EmailModule } from './modules/email/email.module';



@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'btmail.changes.hk',
          port: 25,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: "df@changes.hk",
            pass: "jiakr1995",
          },
        },
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
        },
        template: {
          dir: path.join(__dirname, './templates/email'),
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      })
    }),
    HelloModule,
    ExceptionModule,
    RoleGuardModule,
    EmailModule,
  ],
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
