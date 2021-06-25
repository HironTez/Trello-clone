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
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string | null;
}


type UsersMethodGet = () => Promise<Array<User>>;
type UsersMethodGetById = (id: string) => Promise<User | undefined>;
type UsersMethodAdd = (user: User) => void;
type UsersMethodUpdate = (id: string, newUser: User) => Promise<boolean>;
type UsersMethodDelete = (id: string) => void;

type BoardsMethodGet = () => Promise<Array<Board>>;
type BoardsMethodGetById = (id: string) => Promise<Board | undefined>;
type BoardsMethodAdd = (board: Board) => void;
type BoardsMethodUpdate = (id: string, newBoard: Board) => Promise<boolean>;
type BoardsMethodDelete = (id: string) => void;

type TasksMethodGetByBoardId = (boardId: string) => Promise<Array<Task>>;
type TasksMethodGetById = (id: string, boardId: string) => Promise<Task | undefined>;
type TasksMethodAdd = (task: Task) => void;
type TasksMethodUpdate = (id: string, newTask: Task) => Promise<boolean>;
type TasksMethodDelete = (id: string) => void;
type TasksMethodRemoveUserId = (id: string) => void;
type TasksMethodDeleteByBoardId = (boardId: string) => void;

interface UsersMethods {
    get: UsersMethodGet;
    getById: UsersMethodGetById;
    add: UsersMethodAdd;
    update: UsersMethodUpdate;
    delete: UsersMethodDelete;
}

interface BoardsMethods {
    get: BoardsMethodGet;
    getById: BoardsMethodGetById;
    add: BoardsMethodAdd;
    update: BoardsMethodUpdate;
    delete: BoardsMethodDelete;
}

interface TasksMethods {
    getByBoardId: TasksMethodGetByBoardId;
    getById: TasksMethodGetById
    add: TasksMethodAdd;
    update: TasksMethodUpdate;
    delete: TasksMethodDelete;
    removeUserId: TasksMethodRemoveUserId;
    deleteByBoardId: TasksMethodDeleteByBoardId;
}

interface DBController {
    users: UsersMethods;
    boards: BoardsMethods;
    tasks: TasksMethods;
}


export { User, Board, Task, Column, DBController };