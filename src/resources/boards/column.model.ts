import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('Column')
export class ColumnModel extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    title!: string;

    @Column()
    order!: number;

};