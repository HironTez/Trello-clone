import { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT } from './board.types';
import { Board } from './board.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardsRepository: Repository<Board>,
    ) {};

    /**
     * Returns an array of all boards
     * @returns {Array<Board>} Array of all boards
     */
    getAllBoards: GetAllT = async () => this.boardsRepository.find();

    /**
     * Returns the board with the specified ID
     * @param {string} id ID board to search
     * @returns {Board} Board with the specified ID
     */
    getById: GetByIdT = async (id) => this.boardsRepository.findOne(id);

    /**
     * Adds a board to the DataBase
     * @param {Board} board Board to add to the DataBase
     */
    addBoard: AddBoardT = async (board) => this.boardsRepository.save(board);

    /**
     * Updates the data of the board with the specified ID
     * @param {string} id ID board
     * @param {string} title Title to update
     * @returns {Promise<boolean>} Board updated successfully
     */
    updateBoard: UpdateBoardT = async (id, title) => {
        const board = await this.getById(id);
        if (!board) return false;
        return this.boardsRepository.save({...board, ...{id, title}});
    };

    /**
     * Deletes the board with the specified ID
     * @param {string} id ID board to delete
     * @returns {Promise<boolean>} Board deleted successfully
     */
    deleteBoard: DeleteBoardT = (id) => this.boardsRepository.delete(id);

};