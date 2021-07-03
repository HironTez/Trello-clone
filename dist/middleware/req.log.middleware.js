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
exports.ReqLogMiddleware = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = __importDefault(require("../services/logger"));
const current_time_1 = require("../services/current.time");
let ReqLogMiddleware = class ReqLogMiddleware {
    use(req, res, next) {
        res.on('finish', () => {
            logger_1.default.log(`[${current_time_1.getTime()}]\
                Method: ${req.method};\
                Url: ${req.url};\
                Query parameters: ${JSON.stringify(req.query)};\
                Body: ${JSON.stringify(req.body)};\
                Status code: ${res.statusCode}`
                .replace(/\s{16}/g, ' '));
        });
        next();
    }
    ;
};
ReqLogMiddleware = __decorate([
    common_1.Injectable()
], ReqLogMiddleware);
exports.ReqLogMiddleware = ReqLogMiddleware;
;
//# sourceMappingURL=req.log.middleware.js.map