import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    validateUser(login: string, password: string): Promise<any>;
    login(user: any): Promise<string>;
}
