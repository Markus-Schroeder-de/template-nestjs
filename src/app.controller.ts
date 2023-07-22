import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  /**
   * The function `getHello` returns a string value obtained from the `appService` object.
   * @returns a string value.
   */
  getHello(): string {
    return this.appService.getHello();
  }
}
