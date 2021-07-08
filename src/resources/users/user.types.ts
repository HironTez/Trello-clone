import { User } from 'src/resources/users/user.model';

type GetAllT = () => Promise<Array<User>>;
type GetByIdT = (id: string) => Promise<User | undefined>;
type AddUserT = (user: User) => Promise<boolean>;
type UpdateUserT = (id: string, newUser: User) => Promise<boolean>;
type DeleteUserT = (id: string) => void;

export { GetAllT, GetByIdT, AddUserT, UpdateUserT, DeleteUserT };