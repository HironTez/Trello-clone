import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReqLogMiddleware } from './middleware/req.log.middleware';
import { HttpErrorFilter } from './middleware/http-exception.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionOptions } from './ormconfig';
import { UserModule } from './resources/users/user.module';
import { BoardModule } from './resources/boards/board.module';
import { TaskModule } from './resources/tasks/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [TypeOrmModule.forRoot(connectionOptions), UserModule, BoardModule, TaskModule, AuthModule],
    controllers: [AppController],
    providers: [AppService, HttpErrorFilter],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(ReqLogMiddleware)
            .forRoutes({
                path: '*', method: RequestMethod.ALL
            });
    };
};