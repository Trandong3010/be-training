import { Module } from '@nestjs/common';
import { UsersService } from '../../services/user/users.service';
import { usersProviders } from './users.providers';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
