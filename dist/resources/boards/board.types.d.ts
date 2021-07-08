import { BoardDataDto } from './dto/board-data.dto';
import { Board } from './board.model';
declare type GetAllT = () => Promise<Array<Board>>;
declare type GetByIdT = (id: string) => Promise<Board | undefined>;
declare type AddBoardT = (board: BoardDataDto) => Promise<Board>;
declare type UpdateBoardT = (id: string, title: string) => Promise<Board | false>;
declare type DeleteBoardT = (id: string) => void;
export { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT };
