import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiErrCode } from 'src/common/exceptions/api.errCode.enum';
import { ApiException } from 'src/common/exceptions/api.exception';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    if (err) {
      throw err;
    }

    if (!user) {
      throw new ApiException(ApiErrCode.NOT_LOGIN);
    }

    return user;
  }
}
