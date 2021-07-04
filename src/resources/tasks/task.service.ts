import { db } from '../../db';
import { GetAllByBoardT, GetByIdAndBoardT, AddTaskT, UpdateTaskT, DeleteTaskT, RemoveUserIdT, DeleteTasksByBoardId } from './task.types';
import { TaskT } from '../../types';

/**
 * Returns an array of tasks which have a board with the specified ID
 * @param {string} boardId ID board to search
 * @returns {Array<TaskT>} Array of tasks
 */
export const getAllTasksByBoardId: GetAllByBoardT = async (boardId) => db['tasks'].filter((task: TaskT) => task.boardId == boardId);

/**
/**
 * Returns the task with the specified ID which have a board with the specified ID
 * @param {string} id ID task to search
 * @param {string} boardId ID board to search
 * @returns {TaskT} Task with the specified ID
 */
export const getByIdAndBoardId: GetByIdAndBoardT = async (id, boardId) => db['tasks'].find((task: TaskT) => task.id == id && task.boardId == boardId);

/**
 * Adds a task to the DataBase
 * @param {TaskT} task Task to add to the DataBase
 * @returns {Promise<boolean>} Task added successfully
 */
export const addTask: AddTaskT = async (task) => Boolean(db['tasks'].push(task));

/**
 * Updates the data of the task with the specified ID
 * @param {string} id ID task
 * @param {string} boardId ID board
 * @param {TaskT} newTask Data to update
 * @returns {Promise<boolean>} Task updated successfully
 */
export const updateTask: UpdateTaskT = async (id, boardId, newTask) => Boolean(Object.assign((await getByIdAndBoardId(id, boardId)) || {}, newTask));

/**
 * Deletes the task with the specified ID
 * @param {string} id ID task to delete
 * @param {string} boardId ID board to delete
 * @returns {Promise<boolean>} Task deleted successfully
 */
export const deleteTask: DeleteTaskT = async (id, boardId) => Boolean(db['tasks'].splice(db['tasks'].indexOf((await getByIdAndBoardId(id, boardId))!), 1));

/**
 * Changes user ID to null
 * @param {string} userId User ID to delete
 */
export const removeTaskByUserId: RemoveUserIdT = async (userId) => db['tasks'].filter((task: TaskT) => task.userId == userId).map((task: TaskT) => {task.userId = null});

/**
 * Deletes the task with the specified board ID
 * @param {string} boardId ID board to delete
 */
export const deleteTasksByBoardId: DeleteTasksByBoardId = async (boardId) => db['tasks'].filter((task: TaskT) => task.boardId == boardId).forEach((task: TaskT) => db['tasks'].splice(db['tasks'].indexOf(task), 1));