"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getById = exports.getAllUsers = void 0;
const db_1 = require("../../db");
const getAllUsers = async () => db_1.db['users'];
exports.getAllUsers = getAllUsers;
const getById = async (id) => db_1.db['users'].find((user) => user.id == id);
exports.getById = getById;
const addUser = async (user) => Boolean(db_1.db['users'].push(user));
exports.addUser = addUser;
const updateUser = async (id, newUser) => Boolean(Object.assign((await exports.getById(id)) || {}, newUser));
exports.updateUser = updateUser;
const deleteUser = async (id) => Boolean(db_1.db['users'].splice(db_1.db['users'].indexOf((await exports.getById(id))), 1));
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.service.js.map