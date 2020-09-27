import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { ApiErrCode } from './common/exceptions/api.errCode.enum';
import { ApiException } from './common/exceptions/api.exception';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  // 返回基本数据类型
  @Get()
  getHello() {
    return 'hello';
  }

  // 返回对象
  @Get('/hello-object')
  getHelloObject() {
    return this.appService.getHelloObject();
  }

  // 抛出业务 api 异常（默认 statusCode = 200）
  @Get('/api-error')
  getApiError() {
    throw new ApiException(ApiErrCode.NOT_LOGIN);
  }

  // 抛出业务 api 异常（自定义 statusCode）
  @Get('/api-forbidden')
  getApiForbidden() {
    throw new ApiException(ApiErrCode.NOT_LOGIN, HttpStatus.FORBIDDEN);
  }

  // 登录接口
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
