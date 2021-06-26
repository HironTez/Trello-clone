import {Board} from '../../types';

type GetAll = () => Array<Board>;
type GetById = (id: string) => Board | undefined;
type AddBoard = (board: Board) => void;
type UpdateBoard = (id: string, data: Board) => boolean;
type DeleteBoard = (id: string) => boolean;

export {GetAll, GetById, AddBoard, UpdateBoard, DeleteBoard};