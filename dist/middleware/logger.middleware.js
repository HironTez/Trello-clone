"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = __importDefault(require("../services/logger"));
const current_time_1 = require("../services/current.time");
class MyLogger extends common_1.Logger {
    log(message) {
        logger_1.default.log(`[${current_time_1.getTime()}] ${message}`);
    }
    ;
    error(message, _trace) {
        logger_1.default.error(`[${current_time_1.getTime()}] ${message}`);
    }
    ;
}
exports.MyLogger = MyLogger;
//# sourceMappingURL=logger.middleware.js.map