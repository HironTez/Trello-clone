import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/resources/users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET_KEY as secretKey } from 'src/common/config';
import { LoginController } from 'src/resources/login/login.controller';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: secretKey,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [LoginController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule { }