import { Module } from '@nestjs/common';
import { MainPageController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [MainPageController],
    providers: [AppService],
})
export class AppModule { };
