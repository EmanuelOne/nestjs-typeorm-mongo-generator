import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { ObjectID } from 'typeorm';
import { UserService } from './user.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('all')
  async findAll() {
    return await this.userService.findAll();
  }

  @Delete('delete')
  async deleteAll() {
    return await this.userService.deleteAll();
  }
  @Get(':id')
  @UseGuards(new JwtAuthGuard())
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.userService.findOne(id);
      if (!user) {
        throw new BadRequestException('User Not Found');
      }
      return user;
    } catch (err) {
      throw new BadRequestException('User Not Found');
    }
  }
}
