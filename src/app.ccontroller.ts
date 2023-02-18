import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppUser } from './app.models';
import { AppService } from './app.service';
import { AppUserUdateDto } from './appUserDate.controller.dto';

@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Note: AppUser from model can be used as dto (data transfer oject)
  @ApiCreatedResponse({ type: AppUser }) // swagger api response returned
  @ApiBadRequestResponse()
  @Post('create')
  async createAppUser(@Body() userDto: AppUser) {
    return this.appService.creatingAppUser(userDto);
  }

  @ApiOkResponse({ type: AppUser, isArray: true })
  @Get()
  readAppUser() {
    return this.appService.readAppUser();
  }

  // to update in nestjs you need DTO type
  @Put(':id')
  async updateAppUser(
    @Param('id') id: string,
    @Body() updateData: AppUserUdateDto,
  ): Promise<AppUser> {
    return this.appService.updateAppUser(id, updateData);
  }

  @ApiOkResponse()
  @Delete(':id')
  async deleteAppUser(@Param('id') id: string) {
    return this.appService.deleteAppUser(id);
  }
}
