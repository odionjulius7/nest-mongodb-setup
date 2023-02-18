// DTO: stands for data transfer object
// and also describe the data type

import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsAlphanumeric, MinLength } from 'class-validator';

// more like shape of the data to be transferred and validated
export class CreateUserDto {
  @ApiProperty() // decorator to describe the way our data is input on swagger doc
  @IsAlphanumeric() // pipe decorator that validate the type of data the name is(both alphabet and number)
  @MinLength(10) // min lenght is 10 char
  name: string;

  // @ApiProperty({ required: false }) // since swagger won't automatically recognise it's optional, add this required: false
  // age?: number;
}

// In NestJS, decorators are used extensively to define controllers, services,
//  and providers, as well as to define routes and
// input validation rules. Some common decorators in NestJS include:
