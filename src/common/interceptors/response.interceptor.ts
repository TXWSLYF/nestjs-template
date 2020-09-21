import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiErrCode, apiErrMsgMap } from '../exceptions/api.errCode.enum';

export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const errCode = ApiErrCode.SUCCESS;

    return next.handle().pipe(
      map(data => {
        return {
          data,
          errCode,
          errMsg: apiErrMsgMap[errCode],
        };
      }),
    );
  }
}
