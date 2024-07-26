import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Main')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 201, description: 'Hello World !' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getHello(): string {
    return this.appService.getHello();
  }
}
