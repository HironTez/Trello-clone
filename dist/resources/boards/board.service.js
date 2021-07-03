"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.updateBoard = exports.addBoard = exports.getById = exports.getAllBoards = void 0;
const db_1 = require("../../db");
const getAllBoards = async () => db_1.db['boards'];
exports.getAllBoards = getAllBoards;
const getById = async (id) => db_1.db['boards'].find((board) => board.id == id);
exports.getById = getById;
const addBoard = async (board) => Boolean(db_1.db['boards'].push(board));
exports.addBoard = addBoard;
const updateBoard = async (id, newBoard) => Boolean(Object.assign((await exports.getById(id)) || {}, newBoard));
exports.updateBoard = updateBoard;
const deleteBoard = async (id) => Boolean(db_1.db['boards'].splice(db_1.db['boards'].indexOf((await exports.getById(id))), 1));
exports.deleteBoard = deleteBoard;
//# sourceMappingURL=board.service.js.map