import { GetAllByBoardT, GetByIdAndBoardT, UpdateTaskT, DeleteTaskT } from './task.types';
import { Task } from './task.model';
import { Repository } from 'typeorm';
import { TaskDataDto } from './dto/task-data.dto';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    getAllTasksByBoardId: GetAllByBoardT;
    getByIdAndBoardId: GetByIdAndBoardT;
    addTask: (taskData: TaskDataDto, boardId: string) => Promise<Task>;
    updateTask: UpdateTaskT;
    deleteTask: DeleteTaskT;
}
