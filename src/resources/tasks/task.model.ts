import { v4 as uuid } from 'uuid';
import { TaskT } from '../../types';
import { Entity, PrimaryColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { User } from '../users/user.model';
import { Board } from '../boards/board.model';

@Entity('Task')
export class Task extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => User, { onDelete: 'SET NULL' })
    user!: User;

    @Column({ nullable: true })
    userId: string | null;

    @ManyToOne(() => Board, { onDelete: 'CASCADE' })
    board!: Board;

    @Column()
    boardId: string;

    @Column('varchar', { nullable: true })
    columnId: string | null;

    @Column()
    order: number;

    constructor({
        id = uuid(),
        title = 'TASK',
        description = 'task',
        userId = 'task',
        boardId = 'board',
        columnId = 'column',
        order = 0
    } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.order = order;
    };

    static toResponse(task: TaskT): { id: string, title: string, description: string, userId: string | null, boardId: string, columnId: string | null, order: number } {
        const { id, title, description, userId, boardId, columnId, order } = task;
        return { id, title, description, userId, boardId, columnId, order };
    };
};