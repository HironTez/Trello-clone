import { BoardDataDto } from './dto/board-data.dto';
import { Board } from './board.model';

type GetAllT = () => Promise<Array<Board>>;
type GetByIdT = (id: string) => Promise<Board | undefined>;
type AddBoardT = (board: BoardDataDto) => Promise<Board>;
type UpdateBoardT = (id: string, title: string) => Promise<Board | false>;
type DeleteBoardT = (id: string) => void;

export { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT };