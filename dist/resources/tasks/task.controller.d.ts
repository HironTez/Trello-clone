import { Response } from 'express';
import { TaskDataDto } from './dto/task-data.dto';
import { TasksService } from './task.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getTasksByBoardId(res: Response, boardId: string): Promise<Response<any, Record<string, any>>>;
    getTaskById(res: Response, id: string, boardId: string): Promise<Response<any, Record<string, any>>>;
    createTask(res: Response, boardId: string, body: TaskDataDto): Promise<Response<any, Record<string, any>>>;
    updateTaskById(res: Response, id: string, boardId: string, body: TaskDataDto): Promise<Response<any, Record<string, any>>>;
    deleteTaskById(res: Response, id: string, boardId: string): Promise<Response<any, Record<string, any>>>;
}
