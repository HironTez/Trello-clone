import { AppService } from './app.service';
import { UsersController } from './resources/users/user.controller';
declare class MainPageController {
    private readonly appService;
    constructor(appService: AppService);
    main(): string;
}
export { MainPageController, UsersController };
