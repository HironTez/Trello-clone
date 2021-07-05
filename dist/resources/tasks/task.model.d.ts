import { TaskT } from '../../types';
import { BaseEntity } from "typeorm";
import { User } from '../users/user.model';
import { Board } from '../boards/board.model';
export declare class Task extends BaseEntity {
    id: string;
    title: string;
    description: string;
    user: User;
    userId: string | null;
    board: Board;
    boardId: string;
    columnId: string | null;
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
        columnId: string | null;
        order: number;
    };
}
