import { v4 as uuid } from 'uuid';
import { ColumnT } from '../../types';

export class Board {
    public id: string;
    public title: string;
    public columns: Array<ColumnT>;

    constructor({
        id = uuid(),
        title = 'BOARD',
        columns = []
    } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns.map((column: ColumnT) => {
            const result = column;
            result.id = uuid();
            return result;
        });
    };
};