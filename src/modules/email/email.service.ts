import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) { }
    sendEmail() {
        this.mailerService.sendMail({
            to: '8319698@qq.com',
            from: 'testmail@changes.hk',
            //发送测试邮件，使用的可能不是视频教程的组件
            subject: '每一天都有自己爱自己√',
            //需要使用Html模板
            html: '<b>你好啊</b>'
            // template: 'welcome',
        })
            .then(() => { })
            .catch(() => { });
    }
}
