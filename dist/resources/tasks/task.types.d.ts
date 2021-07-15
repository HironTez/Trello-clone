import { TaskT } from '../../types';
declare type GetAllByBoardT = (boardId: string) => Promise<Array<TaskT>>;
declare type GetByIdAndBoardT = (id: string, boardId: string) => Promise<TaskT | undefined>;
declare type AddTaskT = (task: TaskT) => Promise<boolean>;
declare type UpdateTaskT = (id: string, boardId: string, newTask: TaskT) => Promise<boolean>;
declare type DeleteTaskT = (id: string, boardId: string) => void;
export { GetAllByBoardT, GetByIdAndBoardT, AddTaskT, UpdateTaskT, DeleteTaskT };
