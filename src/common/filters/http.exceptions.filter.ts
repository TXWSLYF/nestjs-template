import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiException } from '../exceptions/api.exception';

/**
 * @description HttpException 异常捕获
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    // 业务 api 异常
    if (exception instanceof ApiException) {
      response.status(status).json({
        errCode: exception.getErrCode(),
        errMsg: exception.getErrMsg(),
      });
    } else {
      response.status(status).json({
        statusCode: status,
        errMsg: exception.message,
      });
    }
  }
}
