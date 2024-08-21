import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './users.schema';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
  private usersFilePath = path.join(__dirname, '../src/users.json');

  async getUsers(): Promise<Array<User>> {
    try {
      const data = await fs.readFile(this.usersFilePath, 'utf8');
      return JSON.parse(data.toString());
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error reading a file.');
    }
  }

  async getUserById(id: number): Promise<User> {
    try {
      const users = await this.getUsers();
      const user = users.find((user: User) => user.id === id);

      if (!user) {
        throw new InternalServerErrorException('The user was not found.');
      }

      return user;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.response.message);
    }
  }
}
