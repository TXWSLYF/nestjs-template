import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrCode } from 'src/common/exceptions/api.errCode.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { userId, username } = user;
      return { userId, username };
    } else {
      throw new ApiException(ApiErrCode.USERNAME_OR_PASSWORD_ERROR);
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
