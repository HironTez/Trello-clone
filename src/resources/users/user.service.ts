import { GetAllT, GetByIdT, AddUserT, UpdateUserT, DeleteUserT } from './user.types';
import { User } from './user.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash, genSaltSync } from 'bcryptjs';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {};

    /**
     * Returns an array of all users
     * @returns {Array<User>} Array of all users
     */
    getAllUsers: GetAllT = async () => await this.usersRepository.find();

    /**
     * Returns the user with the specified ID
     * @param {string} id ID user to search
     * @returns {User} User with the specified ID
     */
    getById: GetByIdT = async (id) => await this.usersRepository.findOne(id);

    /**
     * Adds a user to the DataBase
     * @param {User} user User to add to the DataBase
     */
    addUser: AddUserT = async (user) => Boolean(await this.usersRepository.save({...user, ...{password: await hash(user.password, genSaltSync(10))}}));

    /**
     * Updates the data of the user with the specified ID
     * @param {string} id ID user
     * @param {User} newUser Data to update
     * @returns {Promise<boolean>} User updated successfully
     */
    updateUser: UpdateUserT = async (id, newUser) => Boolean(await this.usersRepository.save({...(await this.getById(id)), ...{...newUser, ...{password: await hash(newUser.password, genSaltSync(10))}}}));

    /**
     * Deletes the user with the specified ID
     * @param {string} id ID user to delete
     * @returns {Promise<boolean>} User deleted successfully
     */
    deleteUser: DeleteUserT = (id) => this.usersRepository.delete(id);

};