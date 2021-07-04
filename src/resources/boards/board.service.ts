import { db } from '../../db';
import { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT } from './board.types';
import { BoardT } from '../../types';

/**
 * Returns an array of all boards
 * @returns {Array<Board>} Array of all boards
 */
export const getAllBoards: GetAllT = async () => db['boards'];

/**
 * Returns the board with the specified ID
 * @param {string} id ID board to search
 * @returns {BoardT} Board with the specified ID
 */
export const getById: GetByIdT = async (id) => db['boards'].find((board: BoardT) => board.id == id);

/**
 * Adds a board to the DataBase
 * @param {BoardT} board Board to add to the DataBase
 */
export const addBoard: AddBoardT = async (board) => Boolean(db['boards'].push(board));

/**
 * Updates the data of the board with the specified ID
 * @param {string} id ID board
 * @param {BoardT} newBoard Data to update
 * @returns {Promise<boolean>} Board updated successfully
 */
export const updateBoard: UpdateBoardT = async (id, newBoard) => {
    const board = await getById(id);
    if (!board) return false;
    board.id = newBoard.id;
    board.title = newBoard.title;
    return true;
};

/**
 * Deletes the board with the specified ID
 * @param {string} id ID board to delete
 * @returns {Promise<boolean>} Board deleted successfully
 */
export const deleteBoard: DeleteBoardT = async (id) => Boolean(db['boards'].splice(db['boards'].indexOf((await getById(id))!), 1));