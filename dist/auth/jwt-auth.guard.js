"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const config_1 = require("../common/config");
const jwt = __importStar(require("jsonwebtoken"));
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
    canActivate(context) {
        const res = context.switchToHttp().getResponse();
        const req = context.switchToHttp().getRequest();
        try {
            const token = req.headers.authorization?.replace('Bearer ', '');
            if (token) {
                if (jwt.verify(token, config_1.JWT_SECRET_KEY)) {
                    return true;
                }
                ;
            }
            ;
        }
        catch {
            res.status(common_1.HttpStatus.FORBIDDEN).send();
            return false;
        }
        ;
        res.status(common_1.HttpStatus.UNAUTHORIZED).send();
        return false;
    }
    ;
    handleRequest(err, user) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        ;
        return user;
    }
    ;
};
JwtAuthGuard = __decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
;
//# sourceMappingURL=jwt-auth.guard.js.map