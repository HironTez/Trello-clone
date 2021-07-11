import { dbController as db } from '../../db.controller';
import { Board } from '../../types';
import { GetAll, GetById, AddBoard, UpdateBoard, DeleteBoard } from './board.types';

/**
 * Returns an array of all boards
 * @returns {Array<Board>} Array of all boards
 */
const getAll: GetAll = async () => {
    const boards = await db.boards.get();
    return boards;
};

/**
 * Returns the board with the specified ID
 * @param {string} id ID board to search
 * @returns {Board} Board with the specified ID
 */
const getById: GetById = (id: string) => db.boards.getById(id);

/**
 * Adds a board to the DataBase
 * @param {Board} board Board to add to the DataBase
 */
const addBoard: AddBoard = (board: Board) => {
    db.boards.add(board);
};

/**
 * Updates the data of the board with the specified ID
 * @param {string} id ID board
 * @param {Board} data Data to update
 * @returns {boolean} Board updated successfully
 */
const updateBoard: UpdateBoard = async (id: string, data: Board) => {
    const board = getById(id);
    if (board !== undefined) {
        await db.boards.update(id, { ...board, ...data });

        return true;
    }
    return false;
};

/**
 * Deletes the board with the specified ID
 * @param {string} id ID board to delete
 * @returns {boolean} Board deleted successfully
 */
const deleteBoard: DeleteBoard = async (id: string) => {
    const board = getById(id);
    if (board !== undefined) {
        // Delete board
        db.boards.delete(id);
        // Delete all dependent tasks
        await db.tasks.deleteByBoardId(id)

        return true;
    }
    return false;
};

export = { getAll, getById, addBoard, updateBoard, deleteBoard };