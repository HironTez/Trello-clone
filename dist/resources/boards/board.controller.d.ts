import { Response } from 'express';
import { BoardDataDto } from './dto/board-data.dto';
export declare class BoardsController {
    getAllBoards(res: Response): Promise<Response<any, Record<string, any>>>;
    getBoardById(res: Response, id: string): Promise<Response<any, Record<string, any>>>;
    createBoard(res: Response, body: BoardDataDto): Promise<Response<any, Record<string, any>>>;
    updateBoardById(res: Response, id: string, body: BoardDataDto): Promise<Response<any, Record<string, any>>>;
    deleteBoardById(res: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
