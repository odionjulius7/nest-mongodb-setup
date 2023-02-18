import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger/dist/decorators';
import { CreateUserDto } from './DTO/Create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

// segmentize the api base on their relationship
@ApiTags('users')
@Controller('users')
export class UsersController {
  // dependency injection: this constructor help reference the service class
  //   nest js automatically inject this user serice to this controller
  constructor(private userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false }) // just like letting the swagger doc know it's an option to query a name
  @Get()
  //   user entity return an array of user object (user[])
  getUsers(@Query('name') name?: string): User[] {
    return this.userService.findAll(name);
  }

  @ApiOkResponse({ type: User }) // resp. returns d User{}
  @ApiNotFoundResponse() // letting swagger no when the id is not found
  @Get(':id')
  //   user entity return id here (user)
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.findById(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
    // return {
    //   id: Number(id), // you can just convert the id received to number
    // };
  }

  @ApiCreatedResponse({ type: User }) // swagger api response returned
  @ApiBadRequestResponse()
  @Post()
  //   we need pass a body decorator for posting
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body);
  }
}
