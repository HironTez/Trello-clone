import { User } from '../../types';

type GetAll = () => Promise<Array<User>>;
type GetById = (id: string) => Promise<User | undefined>;
type AddUser = (user: User) => void;
type UpdateUser = (id: string, data: User) => Promise<boolean>;
type DeleteUser = (id: string) => Promise<void>;

export { GetAll, GetById, AddUser, UpdateUser, DeleteUser };