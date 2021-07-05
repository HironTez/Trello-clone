import { Response } from 'express';
import { UserDataDto } from './dto/user-data.dto';
import { UsersService } from './user.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(res: Response): Promise<Response<any, Record<string, any>>>;
    getUserById(res: Response, id: string): Promise<Response<any, Record<string, any>>>;
    createUser(res: Response, body: UserDataDto): Promise<Response<any, Record<string, any>>>;
    updateUserById(res: Response, id: string, body: UserDataDto): Promise<Response<any, Record<string, any>>>;
    deleteUserById(res: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
