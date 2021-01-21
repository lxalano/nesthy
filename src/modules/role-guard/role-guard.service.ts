import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleGuardService {
    fetch(user): string {
        return `Hello World! ${user}`;
    }

    save(message): string {
        return `Set Hello Done.${message}`;
    }

    update(id: string, message: string): string {
        return `Update Hello Done. ${id}：${message}`;
    }

    remove(id: number): string {
        return `${id} Record Was Removed.`;
    }
}
