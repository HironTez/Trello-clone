import { ColumnModel } from "./column.model";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('Board')
export class Board extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    title!: string;

    @Column('json')
    columns?: Array<ColumnModel>;

};