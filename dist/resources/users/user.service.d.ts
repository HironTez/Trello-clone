import { GetAllT, GetByIdT, AddUserT, UpdateUserT, DeleteUserT } from './user.types';
import { User } from './user.model';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAllUsers: GetAllT;
    getById: GetByIdT;
    addUser: AddUserT;
    updateUser: UpdateUserT;
    deleteUser: DeleteUserT;
}
