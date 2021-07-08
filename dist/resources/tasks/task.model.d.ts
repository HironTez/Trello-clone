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
    boardId: string | null;
    columnId: string | null;
    order: number;
    static toResponse(task: Task): {
        id: string;
        title: string;
        description: string;
        userId: string | null;
        boardId: string | null;
        columnId: string | null;
        order: number;
    };
}
