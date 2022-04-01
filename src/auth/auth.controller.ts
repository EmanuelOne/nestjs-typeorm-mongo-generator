import { createUserDto, loginUserDto } from './user.dto';
import { User } from './../user/user.entity';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  // @UseGuards(AuthGuard('local'))
  // @UseGuards(LocalAuthGuard)
  login(@Body() body: loginUserDto) {
    return this.authService.login(body);
  }

  @Post('register')
  register(@Body() body: createUserDto) {
    return this.authService.create(body);
  }
}
