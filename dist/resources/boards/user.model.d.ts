import { UserT } from '../../types';
export declare class User {
    id: string;
    name: string;
    login: string;
    password: string;
    constructor({ id, name, login, password }?: {
        id?: string | undefined;
        name?: string | undefined;
        login?: string | undefined;
        password?: string | undefined;
    });
    static toResponse(user: UserT): {
        id: string;
        name: string;
        login: string;
    };
}
