import { LoginDataDto } from './dto/login-data.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class LoginController {
    private authService;
    constructor(authService: AuthService);
    login(_req: Request, body: LoginDataDto): Promise<{
        access_token: string;
    }>;
}
