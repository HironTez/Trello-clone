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
    columns?: Array<ColumnT>;
}
interface TaskT {
    id: string;
    title: string;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string | null;
    order: number;
}
export { UserT, BoardT, TaskT, ColumnT };
