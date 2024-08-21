import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
  });

  describe('getUsers', () => {
    it('should return all users', async () => {
      const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      ];
      expect(await usersController.getUsers()).toStrictEqual(users);
    });
  });

  describe('getUserById', () => {
    it('should return user by id', async () => {
      const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
      expect(await usersController.getUserById(1)).toStrictEqual(user);
    });
  });
});
