import { UserT } from '../../types';

type GetAllT = () => Promise<Array<UserT>>;
type GetByIdT = (id: string) => Promise<UserT | undefined>;
type AddUserT = (user: UserT) => Promise<boolean>;
type UpdateUserT = (id: string, newUser: UserT) => Promise<boolean>;
type DeleteUserT = (id: string) => Promise<boolean>;

export { GetAllT, GetByIdT, AddUserT, UpdateUserT, DeleteUserT };