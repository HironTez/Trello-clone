import { Response } from 'express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
declare class LoginDataDto {
    readonly login: string;
    readonly password: string;
}
export declare class AppController {
    private readonly appService;
    private readonly authService;
    constructor(appService: AppService, authService: AuthService);
    main(): string;
    login(res: Response, body: LoginDataDto): Promise<Response<any, Record<string, any>>>;
}
export {};
