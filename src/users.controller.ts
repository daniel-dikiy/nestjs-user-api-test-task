import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<Array<User>> {
    return await this.usersService.getUsers();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return await this.usersService.getUserById(Number(id));
  }
}
