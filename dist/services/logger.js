"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const promises_1 = __importDefault(require("fs/promises"));
const log = (message, consoleLog = false) => {
    if (consoleLog)
        console.log(message);
    promises_1.default.appendFile('./logs/logs.txt', `${message}\n`);
};
const error = (error) => {
    console.error(error);
    promises_1.default.appendFile('./logs/errors.txt', `${error}\n`);
};
module.exports = { log, error };
//# sourceMappingURL=logger.js.map