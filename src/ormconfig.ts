import { ConnectionOptions } from 'typeorm';
import path from 'path';
import { POSTGRE_HOST, POSTGRE_PORT, POSTGRE_USER, POSTGRE_PASSWORD, POSTGRE_DATABASE } from './common/config';
import { User } from './resources/users/user.model';
import { Board } from './resources/boards/board.model';
import { Task } from './resources/tasks/task.model';

export const connectionOptions = {
    type: 'postgres',
    host: POSTGRE_HOST,
    port: POSTGRE_PORT,
    username: POSTGRE_USER,
    password: POSTGRE_PASSWORD,
    database: POSTGRE_DATABASE,
    migrationsRun: false,
    synchronize: true,
    logging: false,
    keepConnectionAlive: true,
    autoReconnect: true,
    reconnectTries: 100,
    reconnectionInterval: 2000,
    entities: [User, Board, Task],
    migrations: [path.join(__dirname, './migrations/*.ts')],
    cli: {
        migrationsDir: './migrations',
    },
} as ConnectionOptions;