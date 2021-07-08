import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';

class LoginDataDto {
    readonly login!: string;
    readonly password!: string;
};

@Controller()
export class LoginController {
    constructor(
        private readonly authService: AuthService
    ) { };
    @Post('login')
    async login(@Res() res: Response, @Body() body: LoginDataDto) {
        const token = await this.authService.login(body);
        return token ? res.status(HttpStatus.OK).send({ token: token }) : res.status(HttpStatus.FORBIDDEN).send();
    };
};