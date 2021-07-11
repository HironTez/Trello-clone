import { v4 as uuid } from 'uuid';
import { Task as TaskType } from '../../types';
import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity()
class Task extends BaseEntity {

    @PrimaryColumn()
    id!: string;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({ type: 'varchar', nullable: true })
    userId!: string | null;

    @Column()
    boardId!: string;

    @Column({ type: 'varchar', nullable: true })
    columnId!: string | null;

    @Column()
    order!: number;

    constructor({
        id = uuid(),
        title = 'TASK',
        description = 'task',
        userId = 'user',
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
    }

    static toResponse(task: TaskType): { id: string | null, title: string, description: string, userId: string | null, boardId: string, columnId: string | null, order: number } {
        const { id, title, description, userId, boardId, columnId, order } = task;
        return { id, title, description, userId, boardId, columnId, order };
    }
}

export = Task;