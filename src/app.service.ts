import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloObject() {
    return {
      msg: 'hello',
    };
  }
}
