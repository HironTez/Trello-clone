import { BoardT } from '../../types';

type GetAllT = () => Promise<Array<BoardT>>;
type GetByIdT = (id: string) => Promise<BoardT | undefined>;
type AddBoardT = (board: BoardT) => Promise<boolean>;
type UpdateBoardT = (id: string, newBoard: BoardT) => Promise<boolean>;
type DeleteBoardT = (id: string) => Promise<boolean>;

export { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT };