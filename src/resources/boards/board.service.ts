import {db} from '../../db.controller';
import {LooseObject, Board, Column} from '../../types';

/**
 * Returns an array of all boards
 * @returns {array} Array of all boards
 */
const getAll = () => db['boards'];

/**
 * Returns the board with the specified ID
 * @param {string} id ID board to search
 * @returns {object} Board with the specified ID
 */
const getById = (id: string) => db['boards'].find((board: Board) => board.id === id);

/**
 * Adds a board to the DataBase
 * @param {object} board Board to add to the DataBase
 */
const addBoard = (board: Board) => {
    db['boards'].push(board);
};

/**
 * Updates the data of the board with the specified ID
 * @param {string} id ID board
 * @param {object} data Data to update
 * @returns {boolean} Board updated successfully
 */
const updateBoard = (id: string, data: LooseObject) => {
    const board = getById(id);
    if (board !== undefined) {
        board['title'] = data['title'];
        board['columns'].map((column: Column) => {
            const {id, order} = column;
            const newColumn = data['columns'][board['columns'].indexOf(column)];
            newColumn.id = id;
            newColumn.order = order;
            return newColumn;
        });
        return true;
    };
        return false;
};

/**
 * Deletes the board with the specified ID
 * @param {string} id ID board to delete
 * @returns {boolean} Board deleted successfully
 */
const deleteBoard = (id: string) => {
    const board = getById(id);
    if (board !== undefined) {
        // Delete board
        const index = db['boards'].indexOf(board);
        db['boards'].splice(index, 1);

        // Delete all dependent tasks
        db['boards'].forEach((board: Board) => {
            if (board['id'] === id) {
                const boardIndex = db['boards'].indexOf(board);
                db['boards'].splice(boardIndex, 1);
            };
        });
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
    if (data['title'] === undefined || data['columns'].length === 0) return false;
    if (data['columns'][0].title === undefined || typeof data['columns'][0].order !== 'number') return false;
    return true;
};

export = { getAll, getById, addBoard, updateBoard, deleteBoard, dataValidation };