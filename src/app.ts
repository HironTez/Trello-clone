import express from 'express';
import { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import logHandler from './middleware/log.handler';
import errorHandler from './middleware/error.handler';
import reqErrorHandler from './middleware/request.error.handler';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import "reflect-metadata";

const app = express(); // Initialize express
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json() as NextFunction);

app.use(logHandler); // Activate log handler
app.use(reqErrorHandler); // Activate request error handler

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    } 
    next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:id/tasks', taskRouter);

errorHandler(); // Activate handler & logger error

export = app;