import {User} from '../../types';

type GetAll = () => Array<User>;
type GetById = (id: string) => User | undefined;
type AddUser = (user: User) => void;
type UpdateUser = (id: string, data: User) => Promise<boolean>;
type DeleteUser = (id: string) => boolean;

export {GetAll, GetById, AddUser, UpdateUser, DeleteUser};