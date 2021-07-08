import { User } from 'src/resources/users/user.model';
declare type GetAllT = () => Promise<Array<User>>;
declare type GetByIdT = (id: string) => Promise<User | undefined>;
declare type AddUserT = (user: User) => Promise<boolean>;
declare type UpdateUserT = (id: string, newUser: User) => Promise<boolean>;
declare type DeleteUserT = (id: string) => void;
export { GetAllT, GetByIdT, AddUserT, UpdateUserT, DeleteUserT };
