import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';
import { MyLogger } from './modules/logger.module';
import logger from './services/logger';
import * as path from 'path';
import * as YAML from 'yamljs';
import { SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
    logger.log(`Run ${USE_FASTIFY ? 'Fastify' : 'Express'}`, true);

    const app = USE_FASTIFY ?
        await NestFactory.create<NestFastifyApplication>(
            AppModule,
            new FastifyAdapter()
        ) :
        await NestFactory.create(
            AppModule,
            { logger: new MyLogger() }
        );

    const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
    SwaggerModule.setup('doc', app, swaggerDocument);

    await app.listen(PORT);
    logger.log(`Service is running http://localhost:${PORT}`, true);
};
bootstrap();