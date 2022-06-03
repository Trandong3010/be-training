import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { UserDto } from '../../dto/UserDto';
import { DoesUserExist } from 'src/core/guards/doesUserExist.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

class IUser {
  readonly username: string;
  readonly password: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: 201,
    description: 'SignIn successfully.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async login(@Body() user: IUser) {
    return await this.authService.login(user);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
}
