import { Injectable, Inject } from '@nestjs/common';
import { Users } from '../../model/users.entity';
import { UserDto } from '../../dto/UserDto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: typeof Users,
  ) {}

  async create(user: UserDto): Promise<Users> {
    return await this.userRepository.create<Users>(user);
  }

  async findOneByEmail(email: string): Promise<Users> {
    return await this.userRepository.findOne<Users>({ where: { email } });
  }

  async findOneById(id: number): Promise<Users> {
    return await this.userRepository.findOne<Users>({ where: { id } });
  }

  async findAll(): Promise<Users> {
    return await this.userRepository.findOne<Users>();
  }
}
