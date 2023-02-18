// Setup our model for the data representation of the database
// create a schema to represent the database structure

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type AppUserDocument = AppUser & Document;

@Schema()
export class AppUser {
  @Prop()
  @ApiProperty()
  username: string;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop({ default: Date.now }) // for creating a default date.. like created_at
  date_added: Date;
}

export const AppUserSchema = SchemaFactory.createForClass(AppUser);
