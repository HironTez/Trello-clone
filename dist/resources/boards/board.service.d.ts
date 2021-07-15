import { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT } from './board.types';
import { BoardT } from '../../types';
import { Repository } from 'typeorm';
export declare class BoardsService {
    private boardsRepository;
    constructor(boardsRepository: Repository<BoardT>);
    getAllBoards: GetAllT;
    getById: GetByIdT;
    addBoard: AddBoardT;
    updateBoard: UpdateBoardT;
    deleteBoard: DeleteBoardT;
}
