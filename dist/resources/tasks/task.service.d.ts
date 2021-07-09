import { GetAllByBoardT, GetByIdAndBoardT, AddTaskT, UpdateTaskT, DeleteTaskT } from './task.types';
import { TaskT } from '../../types';
import { Repository } from 'typeorm';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<TaskT>);
    getAllTasksByBoardId: GetAllByBoardT;
    getByIdAndBoardId: GetByIdAndBoardT;
    addTask: AddTaskT;
    updateTask: UpdateTaskT;
    deleteTask: DeleteTaskT;
}
