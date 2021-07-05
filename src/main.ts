import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './common/config';
import { MyLogger } from './modules/logger.module';
import * as path from 'path';
import * as YAML from 'yamljs';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new MyLogger()
    });

    const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
    SwaggerModule.setup('doc', app, swaggerDocument);

    await app.listen(PORT);
    console.log(`Service is running http://localhost:${PORT}`);
};
bootstrap();