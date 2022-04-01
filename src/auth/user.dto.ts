import { ObjectID } from 'typeorm';
import {
  IsEmail,
  IsEmpty,
  MinLength,
  IsString,
  IsPhoneNumber,
  IsDate,
} from 'class-validator';
export class createUserDto {
  @IsEmail()
  email: string;
  @MinLength(8)
  password: string;
  @IsEmpty({ message: 'Field not allow' })
  _id?: ObjectID;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsPhoneNumber('NG')
  phone: string;
  // @IsDate()
  // createdAt: Date;
  // @IsDate()
  // updatedAt: Date;
}
export class updateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsPhoneNumber('NG')
  phone: string;
}
export class loginUserDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
export class singleUserDto {
  _id: ObjectID;
}
