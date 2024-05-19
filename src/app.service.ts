import { Injectable } from '@nestjs/common';

// Regras de negocio vai em service
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
