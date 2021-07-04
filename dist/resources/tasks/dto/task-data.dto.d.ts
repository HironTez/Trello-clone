export declare class TaskDataDto {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly userId: string | undefined;
    boardId: string;
    readonly columnId: string;
    readonly order: number;
}
