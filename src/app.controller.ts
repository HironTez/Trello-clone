import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class MainPageController {
    constructor(private readonly appService: AppService) { };

    @Get()
    main(): string {
        return this.appService.main();
    };
};