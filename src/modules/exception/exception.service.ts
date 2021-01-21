import { Injectable } from '@nestjs/common';

@Injectable()
export class ExceptionService {
    fatch(id: any): string {
        return `Hello int(${id})`;
    }
    create(message): string {
        return `create Hello Done.(${message})`;
    }
    update(id: string, message: string): string {
        return `Set Hello Done.(${id}:${message})`;
    }
    remove(id: number): string {
        return `${id}已经删除`
    }
}
