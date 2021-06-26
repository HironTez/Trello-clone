import {db} from '../../db.controller';
import {Task} from '../../types';
import {GetAllByBoard, GetById, AddTask, UpdateTask, DeleteTask} from './task.types';

/**
 * Returns an array of tasks which have a board with the specified ID
 * @param {string} boardId ID board to search
 * @returns {Array<Task>} Array of tasks
 */
const getAllByBoard: GetAllByBoard = (boardId: string | undefined) => {
    const result = db.tasks.filter(task => task.boardId === boardId);
    return result;
};

/**
 * Returns the task with the specified ID which have a board with the specified ID
 * @param {string} id ID task to search
 * @param {string} boardId ID board to search
 * @returns {Task} Task with the specified ID
 */
const getById: GetById = (id: string, boardId: string | undefined) => {
    if (db.boards.find(board => board.id === boardId) === undefined) return undefined; // Exit if no board with the specified ID
    return db.tasks.find(task => task.id === id && task.boardId === boardId);
};

/**
 * Adds a task to the DataBase
 * @param {Task} task Task to add to the DataBase
 */
const addTask: AddTask = (task: Task) => {
    db.tasks.push(task);
};

/**
 * Updates the data of the task with the specified ID
 * @param {string} id ID task
 * @param {string} boardId ID board
 * @param {Task} data Data to update
 * @returns {boolean} Task updated successfully
 */
const updateTask: UpdateTask = (id: string, boardId: string | undefined, data: Task) => {
    const task = getById(id, boardId);
    if (task !== undefined) {
        task.title = data.title !== null? data.title: task.title;
        task.description = data.description !== null? data.description: task.description;
        task.userId = data.userId !== null? data.userId: task.userId;
        task.boardId = data.boardId !== null? data.boardId: task.boardId;
        task.columnId = data.columnId !== null? data.columnId: task.columnId;
        
        return true;
    }
        return false;
};

/**
 * Deletes the task with the specified ID
 * @param {string} id ID task to delete
 * @param {string} boardId ID board to delete
 * @returns {boolean} Task deleted successfully
 */
const deleteTask: DeleteTask = (id: string, boardId: string | undefined) => {
    const task = getById(id, boardId);
    if (task !== undefined) {
        const index = db.tasks.indexOf(task);
        db.tasks.splice(index, 1);

        return true;
    }
        return false;
};

export = {getAllByBoard, getById, addTask, updateTask, deleteTask};