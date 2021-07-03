import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import PORT from './common/config';
import { MyLogger } from './modules/logger.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new MyLogger()
    });
    await app.listen(PORT);
    console.log(`Service is running http://localhost:${PORT}`);
};
bootstrap();