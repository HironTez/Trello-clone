"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USE_FASTIFY = exports.POSTGRE_DATABASE = exports.POSTGRE_PASSWORD = exports.POSTGRE_USER = exports.POSTGRE_PORT = exports.POSTGRE_HOST = exports.JWT_SECRET_KEY = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env')
});
const PORT = process.env['PORT'] || 4000;
exports.PORT = PORT;
const JWT_SECRET_KEY = process.env['JWT_SECRET_KEY'];
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;
const POSTGRE_HOST = process.env['POSTGRES_HOST'];
exports.POSTGRE_HOST = POSTGRE_HOST;
const POSTGRE_PORT = Number(process.env['POSTGRES_PORT']);
exports.POSTGRE_PORT = POSTGRE_PORT;
const POSTGRE_USER = process.env['POSTGRES_USER'];
exports.POSTGRE_USER = POSTGRE_USER;
const POSTGRE_PASSWORD = process.env['POSTGRES_PASSWORD'];
exports.POSTGRE_PASSWORD = POSTGRE_PASSWORD;
const POSTGRE_DATABASE = process.env['POSTGRES_DB'];
exports.POSTGRE_DATABASE = POSTGRE_DATABASE;
const USE_FASTIFY = process.env['USE_FASTIFY'];
exports.USE_FASTIFY = USE_FASTIFY;
//# sourceMappingURL=config.js.map