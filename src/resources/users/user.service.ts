import {db} from '../../db.controller';
import {LooseObject, User} from '../../types';

/**
 * Returns an array of all users
 * @returns {array} Array of all users
 */
const getAll = () => db['users'];

/**
 * Returns the user with the specified ID
 * @param {string} id ID user to search
 * @returns {object} User with the specified ID
 */
const getById = (id: string) => db['users'].find(user => user['id'] === id);

/**
 * Adds a user to the DataBase
 * @param {object} user User to add to the DataBase
 */
const addUser = (user: User) => {
    db['users'].push(user);
};

/**
 * Updates the data of the user with the specified ID
 * @param {string} id ID user
 * @param {object} data Data to update
 * @returns {boolean} User updated successfully
 */
const updateUser = (id: string, data: LooseObject) => {
    const user = getById(id);
    if (user !== undefined) {
        user['name'] = data['name'];
        user['login'] = data['login'];
        user['password'] = data['password'];
        return true;
    };
        return false;
};

/**
 * Deletes the user with the specified ID
 * @param {string} id ID user to delete
 * @returns {boolean} User deleted successfully
 */
const deleteUser = (id: string) => {
    const user = getById(id);
    if (user !== undefined) {
        // Delete user
        const index = db['users'].indexOf(user);
        db['users'].splice(index, 1);

        // Update all dependent tasks
        db['tasks'].forEach(task => {
            if (task['userId'] === id) {
                task['userId'] = null;
            };
        });

        return true;
    };
        return false;
};

/**
 * Checks the validity of data types
 * @param {object} data Data to validation
 * @returns {boolean} The data is of the correct types
 */
const dataValidation = (data: LooseObject) => {
    const {name, login, password} = data;
    if ((name === undefined || typeof name !== 'string') || (login === undefined || typeof login !== 'string') || (password === undefined || typeof password !== 'string')) {
        return false;
    };
        return true;
};

export = { getAll, getById, addUser, updateUser, deleteUser, dataValidation };