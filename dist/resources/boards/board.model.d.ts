import { ColumnModel } from "./column.model";
import { BaseEntity } from "typeorm";
export declare class Board extends BaseEntity {
    id: string;
    title: string;
    columns?: Array<ColumnModel>;
}
