const {db} = require('../../db.controller');

/**
 * Returns an array of all users
 * @returns {array} Array of all users
 */
const getAll = () => db.filter(elem => elem.constructor.name === 'User');

/**
 * Returns the user with the specified ID
 * @param {string} id ID user to search
 * @returns {object} User with the specified ID
 */
const getById = (id) => db.find(user => user.id === id);

/**
 * Adds a user to the DataBase
 * @param {object} user User to add to the DataBase
 */
const addUser = user => {
    db.push(user);
};

/**
 * Updates the data of the user with the specified ID
 * @param {string} id ID user
 * @param {object} data Data to update
 * @returns {boolean} User updated successfully
 */
const updateUser = (id, data) => {
    const user = getById(id);
    if (user !== undefined) {
        user.name = data.name;
        user.login = data.login;
        user.password = data.password;
        return true;
    };
        return false;
};

/**
 * Deletes the user with the specified ID
 * @param {string} id ID user to delete
 * @returns {boolean} User deleted successfully
 */
const deleteUser = id => {
    const user = getById(id);
    if (user !== undefined) {
        // Delete user
        const index = db.indexOf(user);
        db.splice(index, 1);

        // Update all dependent tasks
        db.forEach(item => {
            if (item.userId === id) {
                const task = db[db.indexOf(item)];
                task.userId = null;
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
const dataValidation = data => {
    const {name, login, password} = data;
    if ((name === undefined || typeof name !== 'string') || (login === undefined || typeof login !== 'string') || (password === undefined || typeof password !== 'string')) {
        return false;
    };
        return true;
};

module.exports = { getAll, getById, addUser, updateUser, deleteUser, dataValidation };