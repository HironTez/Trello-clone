import { Response } from 'express';
import { TaskDataDto } from './dto/task-data.dto';
export declare class TasksController {
    getTasksByBoardId(res: Response, boardId: string): Promise<Response<any, Record<string, any>>>;
    getTaskById(res: Response, id: string, boardId: string): Promise<Response<any, Record<string, any>>>;
    createTask(res: Response, boardId: string, body: TaskDataDto): Promise<Response<any, Record<string, any>>>;
    updateTaskById(res: Response, id: string, boardId: string, body: TaskDataDto): Promise<Response<any, Record<string, any>>>;
    deleteTaskById(res: Response, id: string, boardId: string): Promise<Response<any, Record<string, any>>>;
}
