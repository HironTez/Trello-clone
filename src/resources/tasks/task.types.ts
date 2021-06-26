import {Task} from '../../types';

type GetAllByBoard = (boardId: string | undefined) => Array<Task>;
type GetById = (id: string, boardId: string | undefined) => Task | undefined;
type AddTask = (task: Task) => void;
type UpdateTask = (id: string, boardId: string | undefined, data: Task) => boolean;
type DeleteTask = (id: string, boardId: string | undefined) => boolean;

export {GetAllByBoard, GetById, AddTask, UpdateTask, DeleteTask};