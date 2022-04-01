import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MongoDB,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
  ],
})
export class AppModule {}
