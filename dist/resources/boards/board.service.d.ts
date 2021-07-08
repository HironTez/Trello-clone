import { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT } from './board.types';
import { Board } from './board.model';
import { Repository } from 'typeorm';
export declare class BoardsService {
    private boardsRepository;
    constructor(boardsRepository: Repository<Board>);
    getAllBoards: GetAllT;
    getById: GetByIdT;
    addBoard: AddBoardT;
    updateBoard: UpdateBoardT;
    deleteBoard: DeleteBoardT;
}
