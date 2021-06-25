import {v4 as uuid} from 'uuid';
import {User as UserType} from '../../types';
import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";

@Entity()
class User extends BaseEntity {
    
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    login!: string;

    @Column()
    password!: string;

    constructor({
        id = uuid(),
        name = 'USER',
        login = 'user',
        password = 'P@55w0rd'
    } = {}) {
        super();
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