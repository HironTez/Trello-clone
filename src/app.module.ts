import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MainPageController, UsersController, BoardsController, TasksController } from './app.controller';
import { AppService } from './app.service';
import { JsonHeadersMiddleware } from './middleware/json.headers.middleware';
import { ReqLogMiddleware } from './middleware/req.log.middleware';

@Module({
    imports: [],
    controllers: [MainPageController, UsersController, BoardsController, TasksController],
    providers: [AppService],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(JsonHeadersMiddleware, ReqLogMiddleware)
            .forRoutes({ 
                path: '*', method: RequestMethod.ALL 
            });
    };
};