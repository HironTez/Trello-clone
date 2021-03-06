"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const req_log_middleware_1 = require("./middleware/req.log.middleware");
const http_exception_filter_1 = require("./middleware/http-exception.filter");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("./ormconfig");
const user_module_1 = require("./resources/users/user.module");
const board_module_1 = require("./resources/boards/board.module");
const task_module_1 = require("./resources/tasks/task.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(req_log_middleware_1.ReqLogMiddleware)
            .forRoutes({
            path: '*', method: common_1.RequestMethod.ALL
        });
    }
    ;
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot(ormconfig_1.connectionOptions), user_module_1.UserModule, board_module_1.BoardModule, task_module_1.TaskModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, http_exception_filter_1.HttpErrorFilter],
    })
], AppModule);
exports.AppModule = AppModule;
;
//# sourceMappingURL=app.module.js.map