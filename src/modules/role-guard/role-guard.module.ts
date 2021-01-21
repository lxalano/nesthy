import { RoleGuardService } from './role-guard.service';
import { Module } from '@nestjs/common';
import { RoleGuardController } from './role-guard.controller';

@Module({
    imports: [],
    controllers: [RoleGuardController],
    providers: [RoleGuardService],
})
export class RoleGuardModule { }
