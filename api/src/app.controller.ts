import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  createDynamoDb(): any {
    return this.appService.createDynamoDb();
  }

  @Get('/write')
  writeDynamoDb() {
    return this.appService.writeDynamoDb();
  }
}
