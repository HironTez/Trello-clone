import { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT } from './board.types';
import { BoardT } from '../../types';
import { Board } from './board.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardsRepository: Repository<BoardT>,
    ) {};

    /**
     * Returns an array of all boards
     * @returns {Array<Board>} Array of all boards
     */
    getAllBoards: GetAllT = async () => this.boardsRepository.find();

    /**
     * Returns the board with the specified ID
     * @param {string} id ID board to search
     * @returns {BoardT} Board with the specified ID
     */
    getById: GetByIdT = async (id) => this.boardsRepository.findOne(id);

    /**
     * Adds a board to the DataBase
     * @param {BoardT} board Board to add to the DataBase
     */
    addBoard: AddBoardT = async (board) => Boolean(this.boardsRepository.save(board));

    /**
     * Updates the data of the board with the specified ID
     * @param {string} id ID board
     * @param {BoardT} newBoard Data to update
     * @returns {Promise<boolean>} Board updated successfully
     */
    updateBoard: UpdateBoardT = async (id, newBoard) => {
        const board = await this.getById(id);
        if (!board) return false;
        return Boolean(await this.boardsRepository.save({...board, ...newBoard}));
    };

    /**
     * Deletes the board with the specified ID
     * @param {string} id ID board to delete
     */
    deleteBoard: DeleteBoardT = (id) => this.boardsRepository.delete(id);

};