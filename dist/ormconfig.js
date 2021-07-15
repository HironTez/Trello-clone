"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionOptions = void 0;
const path_1 = __importDefault(require("path"));
const config_1 = require("./common/config");
const user_model_1 = require("./resources/users/user.model");
const board_model_1 = require("./resources/boards/board.model");
const task_model_1 = require("./resources/tasks/task.model");
exports.connectionOptions = {
    type: 'postgres',
    host: config_1.POSTGRE_HOST,
    port: config_1.POSTGRE_PORT,
    username: config_1.POSTGRE_USER,
    password: config_1.POSTGRE_PASSWORD,
    database: config_1.POSTGRE_DATABASE,
    migrationsRun: false,
    synchronize: true,
    logging: false,
    keepConnectionAlive: true,
    autoReconnect: true,
    reconnectTries: 100,
    reconnectionInterval: 2000,
    entities: [user_model_1.User, board_model_1.Board, task_model_1.Task],
    migrations: [path_1.default.join(__dirname, './migrations/*.ts')],
    cli: {
        migrationsDir: './migrations',
    },
};
//# sourceMappingURL=ormconfig.js.map