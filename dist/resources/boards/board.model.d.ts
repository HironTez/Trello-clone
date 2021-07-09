import { ColumnT } from '../../types';
import { BaseEntity } from "typeorm";
export declare class Board extends BaseEntity {
    id: string;
    title: string;
    columns?: Array<ColumnT>;
    constructor({ id, title, columns }?: {
        id?: string | undefined;
        title?: string | undefined;
        columns?: never[] | undefined;
    });
}
