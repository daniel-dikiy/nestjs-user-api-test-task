import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    usersService = app.get<UsersService>(UsersService);
  });

  describe('getUsers', () => {
    it('should return all users', async () => {
      const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      ];
      expect(await usersService.getUsers()).toStrictEqual(users);
    });
  });

  describe('getUserById', () => {
    it('should return user by id', async () => {
      const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
      expect(await usersService.getUserById(1)).toStrictEqual(user);
    });
  });
});
