import { UserT } from '../../types';
declare type GetAllT = () => Promise<Array<UserT>>;
declare type GetByIdT = (id: string) => Promise<UserT | undefined>;
declare type AddUserT = (user: UserT) => Promise<boolean>;
declare type UpdateUserT = (id: string, newUser: UserT) => Promise<boolean>;
declare type DeleteUserT = (id: string) => void;
export { GetAllT, GetByIdT, AddUserT, UpdateUserT, DeleteUserT };
