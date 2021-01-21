
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decortor';
import { RolesGuard } from '../../common/guards/roles.guard';
import { RoleGuardService } from './role-guard.service';


@UseGuards(RolesGuard)
@Controller('role-guard')
export class RoleGuardController {
    constructor(private readonly roleGuardService: RoleGuardService) { }

    @Get()
    @Roles('admin')
    feturn(@Query() { user }): string {
        return this.roleGuardService.fetch(user);

    }


}