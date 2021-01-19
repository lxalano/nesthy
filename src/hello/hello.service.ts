import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    fatch(id: any): string {
        return `Hello int(${id})`;
    }


}
