import {v4 as uuid} from 'uuid';
import {Column as ColumnType} from '../../types';
import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";

@Entity()
class Board extends BaseEntity {

    @PrimaryColumn()
    id!: string;

    @Column()
    title!: string;

    @Column('json')
    columns!: Array<ColumnType>;

    constructor({
        id = uuid(),
        title = 'BOARD',
        columns = []
    } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.columns = columns.map((column: ColumnType) => {
            const result = column;
            result.id = uuid();
            return result;
        });
    }
}

export = Board;