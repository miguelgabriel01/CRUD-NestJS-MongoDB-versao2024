import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {User, UserSchema } from './entities/user.entity';
import { MongooseModule, Schema } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
