import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService,) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = { name: 'jiakr', password: '123456' };
        if (user && user.password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }



}
