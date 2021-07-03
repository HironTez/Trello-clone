import { db } from '../../db';
import { GetAllT, GetByIdT, AddUserT, UpdateUserT, DeleteUserT } from './user.types';
import { UserT } from '../../types';

/**
 * Returns an array of all users
 * @returns {Array<User>} Array of all users
 */
export const getAllUsers: GetAllT = async () => db['users'];

/**
 * Returns the user with the specified ID
 * @param {string} id ID user to search
 * @returns {UserT} User with the specified ID
 */
export const getById: GetByIdT = async (id) => db['users'].find((user: UserT) => user.id == id);

/**
 * Adds a user to the DataBase
 * @param {UserT} user User to add to the DataBase
 */
export const addUser: AddUserT = async (user) => Boolean(db['users'].push(user));

/**
 * Updates the data of the user with the specified ID
 * @param {string} id ID user
 * @param {UserT} data Data to update
 * @returns {boolean} User updated successfully
 */
export const updateUser: UpdateUserT = async (id, newUser) => Boolean(Object.assign((await getById(id)) || {}, newUser));

/**
 * Deletes the user with the specified ID
 * @param {string} id ID user to delete
 * @returns {boolean} User deleted successfully
 */
export const deleteUser: DeleteUserT = async (id) => Boolean(db['users'].splice(db['users'].indexOf((await getById(id))!), 1));