import { BoardT } from '../../types';
declare type GetAllT = () => Promise<Array<BoardT>>;
declare type GetByIdT = (id: string) => Promise<BoardT | undefined>;
declare type AddBoardT = (board: BoardT) => Promise<boolean>;
declare type UpdateBoardT = (id: string, newBoard: BoardT) => Promise<boolean>;
declare type DeleteBoardT = (id: string) => Promise<boolean>;
export { GetAllT, GetByIdT, AddBoardT, UpdateBoardT, DeleteBoardT };
