import { Task } from './task.model';
import { TaskDataDto } from './dto/task-data.dto';

type GetAllByBoardT = (boardId: string) => Promise<Array<Task>>;
type GetByIdAndBoardT = (id: string, boardId: string) => Promise<Task | undefined>;
type AddTaskT = (task: Task) => Promise<boolean>;
type UpdateTaskT = (id: string, boardId: string, newTask: TaskDataDto) => Promise<boolean>;
type DeleteTaskT = (id: string, boardId: string) => void;

export { GetAllByBoardT, GetByIdAndBoardT, AddTaskT, UpdateTaskT, DeleteTaskT };