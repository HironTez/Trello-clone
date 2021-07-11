import {Board} from '../../types';

type GetAll = () => Promise<Array<Board>>;
type GetById = (id: string) => Promise<Board | undefined>;
type AddBoard = (board: Board) => void;
type UpdateBoard = (id: string, data: Board) => Promise<boolean>;
type DeleteBoard = (id: string) => Promise<boolean>;

export {GetAll, GetById, AddBoard, UpdateBoard, DeleteBoard};