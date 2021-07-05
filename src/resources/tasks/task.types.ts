import { TaskT } from '../../types';

type GetAllByBoardT = (boardId: string) => Promise<Array<TaskT>>;
type GetByIdAndBoardT = (id: string, boardId: string) => Promise<TaskT | undefined>;
type AddTaskT = (task: TaskT) => Promise<boolean>;
type UpdateTaskT = (id: string, boardId: string, newTask: TaskT) => Promise<boolean>;
type DeleteTaskT = (id: string, boardId: string) => void;

export { GetAllByBoardT, GetByIdAndBoardT, AddTaskT, UpdateTaskT, DeleteTaskT };