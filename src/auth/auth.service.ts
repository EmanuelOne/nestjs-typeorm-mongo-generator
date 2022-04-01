import { loginUserDto } from './user.dto';
import { PasswordService } from './utils/passwordHash';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(body: User) {
    const hashPassword = await PasswordService.hashPassword(body.password);

    body.password = hashPassword;

    if (await this.repo.findOne({ email: body.email })) {
      throw new BadRequestException('Email already exists');
    }
    const user = this.repo.create({
      email: body.email,
      password: body.password,
      firstName: body.firstName,
      lastName: body.lastName,
    });
    return await this.repo.save(user);
  }

  async login(body: loginUserDto) {
    const user = await this.repo.findOne({ email: body.email });
    // console.log(user);
    if (!user) {
      throw new BadRequestException('Invalid email');
    }
    const isValid = await PasswordService.unHashPassword(
      body.password,
      user.password,
    );
    if (!isValid) {
      throw new BadRequestException('Incorrect password');
    }
    return { ...user, token: this.jwtService.sign({ _id: user._id }) };
  }
  async validateUser(body: loginUserDto) {
    const user = await this.repo.findOne({ email: body.email });
    console.log(user);
    if (!user) {
      throw new BadRequestException('Invalid email');
    }
    const isValid = await PasswordService.unHashPassword(
      body.password,
      user.password,
    );
    if (!isValid) {
      throw new BadRequestException('Incorrect password');
    }
    return user;
  }
}
