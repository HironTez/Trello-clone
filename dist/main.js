"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = __importDefault(require("./common/config"));
const logger_module_1 = require("./modules/logger.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: new logger_module_1.MyLogger()
    });
    await app.listen(config_1.default);
    console.log(`Service is running http://localhost:${config_1.default}`);
}
;
bootstrap();
//# sourceMappingURL=main.js.map