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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./common/config");
const logger_module_1 = require("./modules/logger.module");
const logger_1 = __importDefault(require("./services/logger"));
const path = __importStar(require("path"));
const YAML = __importStar(require("yamljs"));
const swagger_1 = require("@nestjs/swagger");
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    logger_1.default.log(`Run ${config_1.USE_FASTIFY ? 'Fastify' : 'Express'}`, true);
    const app = config_1.USE_FASTIFY ?
        await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter()) :
        await core_1.NestFactory.create(app_module_1.AppModule, { logger: new logger_module_1.MyLogger() });
    const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
    swagger_1.SwaggerModule.setup('doc', app, swaggerDocument);
    await app.listen(config_1.PORT);
    logger_1.default.log(`Service is running http://localhost:${config_1.PORT}`, true);
}
;
bootstrap();
//# sourceMappingURL=main.js.map