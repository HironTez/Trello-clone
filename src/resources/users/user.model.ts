import {v4 as uuid} from 'uuid';
import {User as UserType} from '../../types';

class User {
    public id: string;
    public name: string;
    public login: string;
    public password: string;

    constructor({
        id = uuid(),
        name = 'USER',
        login = 'user',
        password = 'P@55w0rd'
    } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }

    static toResponse(user: UserType): {id: string, name: string, login: string} {
        const {id, name, login} = user;
        return {id, name, login};
    }
}

export = User;