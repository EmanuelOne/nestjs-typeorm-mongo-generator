import { singleUserDto } from './../auth/user.dto';
import { User } from './user.entity';
import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  async findAll() {
    return await this.userRepo.find();
  }
  async findOne(id: string): Promise<User> {
    return await this.userRepo.findOne(id);
  }
  async deleteAll() {
    return await this.userRepo.delete({});
  }

  //   async findOne(id: string) {
  //     try {
  //       const user = await this.userRepo.findOne(id);
  //       return user;
  //     } catch (err) {
  //       throw new BadRequestException('Id not Valid');
  //     }
  //   }
}
