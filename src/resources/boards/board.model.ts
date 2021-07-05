import { v4 as uuid } from 'uuid';
import { ColumnT } from '../../types';
import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";

@Entity('Board')
export class Board extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column('json')
    columns?: Array<ColumnT>;

    constructor({
        id = uuid(),
        title = 'BOARD',
        columns = []
    } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.columns = columns.map((column: ColumnT) => {
            const result = column;
            result.id = uuid();
            return result;
        });
    };
};