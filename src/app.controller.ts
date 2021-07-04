import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersController } from './resources/users/user.controller';
import { BoardsController } from './resources/boards/board.controller';
import { TasksController } from './resources/tasks/task.controller';

@Controller()
class MainPageController {
    constructor(private readonly appService: AppService) { };

    @Get()
    main(): string {
        return this.appService.main();
    };
};

export { MainPageController, UsersController, BoardsController, TasksController }