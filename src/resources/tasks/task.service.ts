import { dbController as db } from '../../db.controller';
import { Task } from '../../types';
import { GetAllByBoard, GetById, AddTask, UpdateTask, DeleteTask } from './task.types';

/**
 * Returns an array of tasks which have a board with the specified ID
 * @param {string} boardId ID board to search
 * @returns {Array<Task>} Array of tasks
 */
const getAllByBoard: GetAllByBoard = async (boardId: string) => {
    const result = await db.tasks.getByBoardId(boardId);
    return result;
};

/**
 * Returns the task with the specified ID which have a board with the specified ID
 * @param {string} id ID task to search
 * @param {string} boardId ID board to search
 * @returns {Task} Task with the specified ID
 */
const getById: GetById = (id: string, boardId: string) => db.tasks.getById(id, boardId);

/**
 * Adds a task to the DataBase
 * @param {Task} task Task to add to the DataBase
 */
const addTask: AddTask = (task: Task) => {
    db.tasks.add(task);
};

/**
 * Updates the data of the task with the specified ID
 * @param {string} id ID task
 * @param {string} boardId ID board
 * @param {Task} data Data to update
 * @returns {boolean} Task updated successfully
 */
const updateTask: UpdateTask = async (id: string, boardId: string, data: Task) => {
    const task = getById(id, boardId);
    if (task !== undefined) {
        await db.tasks.update(id, data);

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
const deleteTask: DeleteTask = async (id: string, boardId: string) => {
    const task = getById(id, boardId);
    if (task !== undefined) {
        await db.tasks.delete(id);

        return true;
    }
    return false;
};

export = { getAllByBoard, getById, addTask, updateTask, deleteTask };