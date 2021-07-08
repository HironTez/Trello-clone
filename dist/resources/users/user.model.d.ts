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
    static toResponse(user: User): {
        id: string;
        name: string;
        login: string;
    };
}
