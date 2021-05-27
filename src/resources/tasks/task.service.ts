import {db} from '../../db.controller';
import {LooseObject, Task} from '../../types';

/**
 * Returns an array of tasks which have a board with the specified ID
 * @param {string} boardId ID board to search
 * @returns {array} Array of tasks
 */
const getAllByBoard = (boardId: string | undefined) => {
    const result = db['tasks'].filter(task => task.boardId === boardId);
    return result;
};

/**
 * Returns the task with the specified ID which have a board with the specified ID
 * @param {string} id ID task to search
 * @param {string} boardId ID board to search
 * @returns {object} Task with the specified ID
 */
const getById = (id: string, boardId: string | undefined) => {
    if (db['boards'].find(board => board.id === boardId) === undefined) return undefined; // Exit if no board with the specified ID
    return db['tasks'].find(task => task.id === id && task.boardId === boardId);
};

/**
 * Adds a task to the DataBase
 * @param {object} task Task to add to the DataBase
 */
const addTask = (task: Task) => {
    db['tasks'].push(task);
};

/**
 * Updates the data of the task with the specified ID
 * @param {string} id ID task
 * @param {string} boardId ID board
 * @param {object} data Data to update
 * @returns {boolean} Task updated successfully
 */
const updateTask = (id: string, boardId: string | undefined, data: Task) => {
    const task = getById(id, boardId);
    if (task !== undefined) {
        task.title = data['title'] !== null? data['title']: task.title;
        task.description = data['description'] !== null? data['description']: task.description;
        task.userId = data['userId'] !== null? data['userId']: task.userId;
        task.boardId = data['boardId'] !== null? data['boardId']: task.boardId;
        task.columnId = data['columnId'] !== null? data['columnId']: task.columnId;
        return true;
    };
        return false;
};

/**
 * Deletes the task with the specified ID
 * @param {string} id ID task to delete
 * @param {string} boardId ID board to delete
 * @returns {boolean} Task deleted successfully
 */
const deleteTask = (id: string, boardId: string | undefined) => {
    const task = getById(id, boardId);
    if (task !== undefined) {
        const index = db['tasks'].indexOf(task);
        db['tasks'].splice(index, 1);
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
    const {title, order, description, boardId} = data;
    if ((title === undefined || typeof title !== 'string') || (order === undefined || typeof order !== 'number') || (description === undefined || typeof description !== 'string') || (boardId === undefined || typeof boardId !== 'string')) {
        return false;
    };
        return true;
};

export = { getAllByBoard, getById, addTask, updateTask, deleteTask, dataValidation };