import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/Create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Julius' },
    { id: 1, name: 'GoodLuck' },
    { id: 2, name: 'Julius' },
  ];

  //   you can find users/user with the optional name query params
  findAll(name?: string): User[] {
    if (name) {
      // return all names that matches the inputted name on the query
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto }; // spread the dto data here(CreateDto.name)
    this.users.push(newUser);

    return newUser;
  }
}
