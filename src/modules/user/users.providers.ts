import { Users } from '../../model/users.entity';

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: Users,
  },
];
