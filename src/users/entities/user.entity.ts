// almost same as dto, but represnt shape of our user's object

import { ApiProperty } from '@nestjs/swagger';

// more like shape of the data each method returns
export class User {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;
}
// entity is mapped one to one with the database table
