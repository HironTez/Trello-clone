"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTasksByBoardId = exports.removeTaskByUserId = exports.deleteTask = exports.updateTask = exports.addTask = exports.getByIdAndBoardId = exports.getAllTasksByBoardId = void 0;
const db_1 = require("../../db");
const getAllTasksByBoardId = async (boardId) => db_1.db['tasks'].filter((task) => task.boardId == boardId);
exports.getAllTasksByBoardId = getAllTasksByBoardId;
const getByIdAndBoardId = async (id, boardId) => db_1.db['tasks'].find((task) => task.id == id && task.boardId == boardId);
exports.getByIdAndBoardId = getByIdAndBoardId;
const addTask = async (task) => Boolean(db_1.db['tasks'].push(task));
exports.addTask = addTask;
const updateTask = async (id, boardId, newTask) => Boolean(Object.assign((await exports.getByIdAndBoardId(id, boardId)) || {}, newTask));
exports.updateTask = updateTask;
const deleteTask = async (id, boardId) => Boolean(db_1.db['tasks'].splice(db_1.db['tasks'].indexOf((await exports.getByIdAndBoardId(id, boardId))), 1));
exports.deleteTask = deleteTask;
const removeTaskByUserId = async (userId) => db_1.db['tasks'].filter((task) => task.userId == userId).map((task) => { task.userId = null; });
exports.removeTaskByUserId = removeTaskByUserId;
const deleteTasksByBoardId = async (boardId) => db_1.db['tasks'].filter((task) => task.boardId == boardId).forEach((task) => db_1.db['tasks'].splice(db_1.db['tasks'].indexOf(task), 1));
exports.deleteTasksByBoardId = deleteTasksByBoardId;
//# sourceMappingURL=task.service.js.map