import { TaskT } from '../../types';
declare class Task {
    id: string;
    title: string;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
    order: number;
    constructor({ id, title, description, userId, boardId, columnId, order }?: {
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        userId?: string | undefined;
        boardId?: string | undefined;
        columnId?: string | undefined;
        order?: number | undefined;
    });
    static toResponse(task: TaskT): {
        id: string;
        title: string;
        description: string;
        userId: string | null;
        boardId: string;
        columnId: string;
        order: number;
    };
}
export = Task;
