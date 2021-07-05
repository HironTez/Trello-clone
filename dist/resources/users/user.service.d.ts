import { GetAllT, GetByIdT, AddUserT, UpdateUserT, DeleteUserT } from './user.types';
import { UserT } from '../../types';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserT>);
    getAllUsers: GetAllT;
    getById: GetByIdT;
    addUser: AddUserT;
    updateUser: UpdateUserT;
    deleteUser: DeleteUserT;
}
