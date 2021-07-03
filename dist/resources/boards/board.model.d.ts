import { ColumnT } from '../../types';
export declare class Board {
    id: string;
    title: string;
    columns: Array<ColumnT>;
    constructor({ id, title, columns }?: {
        id?: string | undefined;
        title?: string | undefined;
        columns?: never[] | undefined;
    });
}
