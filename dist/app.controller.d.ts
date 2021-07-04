import { AppService } from './app.service';
import { UsersController } from './resources/users/user.controller';
import { BoardsController } from './resources/boards/board.controller';
import { TasksController } from './resources/tasks/task.controller';
declare class MainPageController {
    private readonly appService;
    constructor(appService: AppService);
    main(): string;
}
export { MainPageController, UsersController, BoardsController, TasksController };
