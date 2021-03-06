import { Controller, Res, Get, Post, Put, Delete, Param, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { TaskDataDto } from './dto/task-data.dto';
import { TasksService } from './task.service';
import { Task } from './task.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { sleep } from 'src/tools/tools';


@Controller('boards/:boardId/tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
    constructor(private readonly tasksService: TasksService) { };

    @Get('')
    async getTasksByBoardId(@Res() res: Response, @Param('boardId') boardId: string) {
        await sleep(20);

        const tasks = await this.tasksService.getAllTasksByBoardId(boardId);
        return res.status(HttpStatus.OK).send(tasks.map(Task.toResponse));
    };

    @Get(':id')
    async getTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string) {
        await sleep(20);

        const task = await this.tasksService.getByIdAndBoardId(id, boardId);
        return task ? res.status(HttpStatus.OK).send(Task.toResponse(task)) : res.status(HttpStatus.NOT_FOUND).send();
    };

    @Post()
    async createTask(@Res() res: Response, @Param('boardId') boardId: string, @Body() body: TaskDataDto) {
        await sleep(20);

        body.boardId = boardId;
        const newTask = new Task(body);
        const taskCreated = await this.tasksService.addTask(newTask);
        return taskCreated ? res.status(HttpStatus.CREATED).send(Task.toResponse(newTask)) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Put(':id')
    async updateTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string, @Body() body: TaskDataDto) {
        await sleep(20);

        body.id = id;
        const newTask = new Task(body);
        const taskUpdated = await this.tasksService.updateTask(id, boardId, newTask);
        return taskUpdated ? res.status(HttpStatus.OK).send(taskUpdated) : res.status(HttpStatus.BAD_REQUEST).send(); // + (404)
    };

    @Delete(':id')
    async deleteTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string) {
        await sleep(20);

        const taskExists = Boolean(await this.tasksService.getByIdAndBoardId(id, boardId));
        if (taskExists) this.tasksService.deleteTask(id, boardId);
        return taskExists ? res.status(HttpStatus.NO_CONTENT).send() : res.status(HttpStatus.NOT_FOUND).send();
    };

};