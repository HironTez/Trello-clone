const {db} = require('../../db.controller');

/**
 * Returns an array of all boards
 * @returns {array} Array of all boards
 */
const getAll = () => db.filter(elem => elem.constructor.name === 'Board');

/**
 * Returns the board with the specified ID
 * @param {string} id ID board to search
 * @returns {object} Board with the specified ID
 */
const getById = (id) => db.find(board => board.id === id);

/**
 * Adds a board to the DataBase
 * @param {object} board Board to add to the DataBase
 */
const addBoard = board => {
    db.push(board);
};

/**
 * Updates the data of the board with the specified ID
 * @param {string} id ID board
 * @param {object} data Data to update
 * @returns {boolean} Board updated successfully
 */
const updateBoard = (id, data) => {
    const board = getById(id);
    if (board !== undefined) {
        board.title = data.title;
        board.columns.map(column => {
            const {columnId, order} = column;
            const newColumn = data.columns[board.columns.indexOf(column)];
            newColumn.id = columnId;
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
const deleteBoard = id => {
    const board = getById(id);
    if (board !== undefined) {
        // Delete board
        const index = db.indexOf(board);
        db.splice(index, 1);

        // Delete all dependent tasks
        db.forEach(item => {
            if (item.boardId === id) {
                const boardIndex = db.indexOf(item);
                db.splice(boardIndex, 1);
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
const dataValidation = data => {
    if (data.title === undefined || data.columns.length === 0) return false;
    if (data.columns[0].title === undefined || typeof data.columns[0].order !== 'number') return false;
    return true;
};

module.exports = { getAll, getById, addBoard, updateBoard, deleteBoard, dataValidation };