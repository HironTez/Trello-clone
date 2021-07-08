import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { User } from '../users/user.model';
import { Board } from '../boards/board.model';

@Entity('Task')
export class Task extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @ManyToOne(() => User, { onDelete: 'SET NULL' })
    user!: User;

    @Column('varchar', { nullable: true })
    userId!: string | null;

    @ManyToOne(() => Board, { onDelete: 'CASCADE' })
    board!: Board;

    @Column('varchar', { nullable: true })
    boardId!: string | null;

    @Column('varchar', { nullable: true })
    columnId!: string | null;

    @Column()
    order!: number;

    static toResponse(task: Task): { id: string, title: string, description: string, userId: string | null, boardId: string | null, columnId: string | null, order: number } {
        const { id, title, description, userId, boardId, columnId, order } = task;
        return { id, title, description, userId, boardId, columnId, order };
    };
};