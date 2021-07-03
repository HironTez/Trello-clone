interface UserT {
    id: string;
    name: string;
    login: string;
    password: string;
}
interface ColumnT {
    id: string;
    title: string;
    order: number;
}
interface BoardT {
    id: string;
    title: string;
    columns: Array<ColumnT>;
}
interface TaskT {
    id: string | null;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string;
}
interface DBT {
    users: Array<UserT>;
    boards: Array<BoardT>;
    tasks: Array<TaskT>;
}
export { DBT, UserT, BoardT, TaskT, ColumnT };
