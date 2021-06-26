import {db} from '../../db.controller';
import {Board} from '../../types';
import {GetAll, GetById, AddBoard, UpdateBoard, DeleteBoard} from './board.types';

/**
 * Returns an array of all boards
 * @returns {Array<Board>} Array of all boards
 */
const getAll: GetAll = () => db['boards'];

/**
 * Returns the board with the specified ID
 * @param {string} id ID board to search
 * @returns {Board} Board with the specified ID
 */
const getById: GetById = (id: string) => db['boards'].find((board: Board) => board.id === id);

/**
 * Adds a board to the DataBase
 * @param {Board} board Board to add to the DataBase
 */
const addBoard: AddBoard = (board: Board) => {
    db['boards'].push(board);
};

/**
 * Updates the data of the board with the specified ID
 * @param {string} id ID board
 * @param {Board} data Data to update
 * @returns {boolean} Board updated successfully
 */
const updateBoard: UpdateBoard = (id: string, data: Board) => {
    const board = getById(id);
    if (board !== undefined) {
        board['title'] = data['title'];
        board['columns'] = data['columns'];

        return true;
    }
        return false;
};

/**
 * Deletes the board with the specified ID
 * @param {string} id ID board to delete
 * @returns {boolean} Board deleted successfully
 */
const deleteBoard: DeleteBoard = (id: string) => {
    const board = getById(id);
    if (board !== undefined) {
        // Delete board
        const index = db['boards'].indexOf(board);
        db['boards'].splice(index, 1);

        // Delete all dependent tasks
        db['boards'].forEach((board: Board) => {
            if (board.id === id) {
                const boardIndex = db['boards'].indexOf(board);
                db['boards'].splice(boardIndex, 1);
            }
        });

        return true;
    }
        return false;
};

export = {getAll, getById, addBoard, updateBoard, deleteBoard};