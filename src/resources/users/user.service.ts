import { dbController as db } from '../../db.controller';
import { User } from '../../types';
import { GetAll, GetById, AddUser, UpdateUser, DeleteUser } from './user.types';

/**
 * Returns an array of all users
 * @returns {Array<User>} Array of all users
 */
const getAll: GetAll = async () => {
    const users = await db.users.get();
    return users;
};

/**
 * Returns the user with the specified ID
 * @param {string} id ID user to search
 * @returns {User} User with the specified ID
 */
const getById: GetById = (id: string) => db.users.getById(id);

/**
 * Adds a user to the DataBase
 * @param {User} user User to add to the DataBase
 */
const addUser: AddUser = (user: User) => {
    db.users.add(user);
};

/**
 * Updates the data of the user with the specified ID
 * @param {string} id ID user
 * @param {User} data Data to update
 * @returns {boolean} User updated successfully
 */
const updateUser: UpdateUser = async (id: string, data: User) => {
    const user = getById(id);
    if (user !== undefined) {
        await db.users.update(id, { ...user, ...data });

        return true;
    }
    return false;
};

/**
 * Deletes the user with the specified ID
 * @param {string} id ID user to delete
 * @returns {boolean} User deleted successfully
 */
const deleteUser: DeleteUser = async (id: string) => {
    // Delete user
    db.users.delete(id);
    // Update all dependent tasks
    await db.tasks.removeUserId(id);
};

export = { getAll, getById, addUser, updateUser, deleteUser };