import { UserT } from '../../types';
import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
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
