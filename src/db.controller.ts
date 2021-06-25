import { DBController } from './types';
import logger from './modules/logger';
import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import User from "./resources/users/user.model";
import Board from "./resources/boards/board.model";
import Task from "./resources/tasks/task.model";


createConnection() // Connect database
    .catch(error => logger.error(error)); // Configure an error handler


const dbController: DBController = {
    users: {
        get: async () => {
            const usersRepo = getRepository(User);
            const users = await usersRepo.find();
            return users;
        },
        getById: async (id) => {
            const usersRepo = getRepository(User);
            const user = await usersRepo.findOne(id);
            return user;
        },
        add: async (user) => {
            const usersRepo = getRepository(User);
            usersRepo.save(user);
        },
        update: async (id, newUser) => {
            const usersRepo = getRepository(User);
            const user = await usersRepo.findOne(id);
            if (user != undefined) await usersRepo.save({
                ...user,
                ...newUser
            });
            return user != undefined;
        },
        delete: async (id) => {
            const usersRepo = getRepository(User);
            const user = await usersRepo.findOne(id);
            if (user != undefined) await usersRepo.remove(user);
            return user != undefined;
        }
    },
    boards: {
        get: async () => {
            const boardsRepo = getRepository(Board);
            const boards = await boardsRepo.find();
            return boards;
        },
        getById: async (id) => {
            const boardsRepo = getRepository(Board);
            const board = await boardsRepo.findOne(id);
            return board;
        },
        add: async (board) => {
            const boardsRepo = getRepository(Board);
            boardsRepo.save(board);
        },
        update: async (id, newBoard) => {
            const boardsRepo = getRepository(Board);
            const board = await boardsRepo.findOne(id);
            if (board != undefined) await boardsRepo.save({
                ...board,
                ...newBoard
            });
            return board != undefined;
        },
        delete: async (id) => {
            const boardsRepo = getRepository(Board);
            const board = await boardsRepo.findOne(id);
            if (board != undefined) await boardsRepo.remove(board);
            return board != undefined;
        }
    },
    tasks: {
        getByBoardId: async (boardId) => {
            const tasksRepo = getRepository(Task);
            const tasks = await tasksRepo.find({ 'boardId': boardId });
            return tasks;
        },
        getById: async (id, boardId) => {
            const tasksRepo = getRepository(Task);
            const task = await tasksRepo.findOne({ 'id': id, 'boardId': boardId });
            return task;
        },
        add: async (task) => {
            const tasksRepo = getRepository(Task);
            tasksRepo.save(task);
        },
        update: async (id, newTask) => {
            const tasksRepo = getRepository(Task);
            const task = await tasksRepo.findOne(id);
            if (task != undefined) await tasksRepo.save({
                ...task,
                ...newTask
            });
            return task != undefined;
        },
        delete: async (id) => {
            const tasksRepo = getRepository(Task);
            const task = await tasksRepo.findOne(id);
            if (task != undefined) await tasksRepo.remove(task);
            return task != undefined;
        },
        removeUserId: async (id) => {
            const tasksRepo = getRepository(Task);
            const task = await tasksRepo.findOne({'userId': id});
            if (task != undefined) await tasksRepo.save({
                ...task,
                ...{'userId': null}
            });
        },
        deleteByBoardId: async (boardId) => {
            const tasksRepo = getRepository(Task);
            const task = await tasksRepo.find({ 'boardId': boardId });
            await tasksRepo.remove(task);
        }
    }
};

export { dbController };