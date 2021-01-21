import { RoleGuardModule } from './modules/role-guard/role-guard.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { MiddlewareConsumer, Module, Patch, RequestMethod } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MailerModule, PugAdapter } from '@nest-modules/mailer';
import { EmailModule } from './modules/email/email.module';
import path from 'path';


@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtps://df@changes.hk:jiakr1995@smtp.changes.hk',
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
