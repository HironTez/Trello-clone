import { Task } from './task.model';
import { TaskDataDto } from './dto/task-data.dto';
declare type GetAllByBoardT = (boardId: string) => Promise<Array<Task>>;
declare type GetByIdAndBoardT = (id: string, boardId: string) => Promise<Task | undefined>;
declare type AddTaskT = (task: Task) => Promise<boolean>;
declare type UpdateTaskT = (id: string, boardId: string, newTask: TaskDataDto) => Promise<boolean>;
declare type DeleteTaskT = (id: string, boardId: string) => void;
export { GetAllByBoardT, GetByIdAndBoardT, AddTaskT, UpdateTaskT, DeleteTaskT };
