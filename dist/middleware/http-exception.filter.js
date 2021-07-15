"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = __importDefault(require("../services/logger"));
let HttpErrorFilter = class HttpErrorFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const req = context.getRequest();
        const res = context.getResponse();
        const next = context.getNext();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const errorResponse = {
            status,
            timestamp: new Date().toLocaleDateString(),
            path: req.url,
            method: req.method,
            params: req.params,
            body: req.body,
            message: exception.message,
        };
        logger_1.default.error(JSON.stringify(errorResponse));
        res.status(status).send({ errorResponse });
        next();
    }
    ;
};
HttpErrorFilter = __decorate([
    common_1.Catch()
], HttpErrorFilter);
exports.HttpErrorFilter = HttpErrorFilter;
;
//# sourceMappingURL=http-exception.filter.js.map