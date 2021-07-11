type FunctionCallable = () => void;

interface User {
    id: string;
    name: string;
    login: string;
    password: string;
}

interface Column {
    id: string;
    title: string;
    order: number;
}

interface Board {
    id: string;
    title: string;
    columns: Array<Column>;
}

interface Task {
    id: string | null;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string;
}

interface DB {
    users: Array<User>;
    boards: Array<Board>;
    tasks: Array<Task>;
}


export {DB, User, Board, Task, Column, FunctionCallable};