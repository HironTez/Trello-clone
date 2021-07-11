import {Task} from '../../types';

type GetAllByBoard = (boardId: string) => Promise<Array<Task>>;
type GetById = (id: string, boardId: string) => Promise<Task | undefined>;
type AddTask = (task: Task) => void;
type UpdateTask = (id: string, boardId: string, data: Task) => Promise<boolean>;
type DeleteTask = (id: string, boardId: string) => Promise<boolean>;

export {GetAllByBoard, GetById, AddTask, UpdateTask, DeleteTask};