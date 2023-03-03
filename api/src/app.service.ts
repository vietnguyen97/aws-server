import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `AWS Server update new Data and ${process.env.CONTENT_TEST} and new tag image`;
  }
}
