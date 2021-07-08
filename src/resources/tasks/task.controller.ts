import { Controller, Res, Get, Post, Put, Delete, Param, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { TaskDataDto } from './dto/task-data.dto';
import { TasksService } from './task.service';
import { Task } from './task.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('boards/:boardId/tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
    constructor(private readonly tasksService: TasksService) { };

    @Get('')
    async getTasksByBoardId(@Res() res: Response, @Param('boardId') boardId: string) {
        const tasks = await this.tasksService.getAllTasksByBoardId(boardId);
        return res.status(HttpStatus.OK).send(tasks.map(Task.toResponse));
    };

    @Get(':id')
    async getTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string) {
        console.log(1);
        const task = await this.tasksService.getByIdAndBoardId(id, boardId);
        console.log(2);
        return task ? res.status(HttpStatus.OK).send(Task.toResponse(task)) : res.status(HttpStatus.NOT_FOUND).send();
    };

    @Post()
    async createTask(@Res() res: Response, @Param('boardId') boardId: string, @Body() body: TaskDataDto) {
        console.log(7);
        const taskCreated = await this.tasksService.addTask(body, boardId);
        console.log(8);
        console.log(taskCreated);
        return taskCreated ? res.status(HttpStatus.CREATED).send(Task.toResponse(taskCreated)) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Put(':id')
    async updateTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string, @Body() body: TaskDataDto) {
        body.id = id;
        console.log(3);
        const taskUpdated = await this.tasksService.updateTask(id, boardId, body);
        console.log(4);
        return taskUpdated ? res.status(HttpStatus.OK).send(taskUpdated) : res.status(HttpStatus.BAD_REQUEST).send(); // + (404)
    };

    @Delete(':id')
    async deleteTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string) {
        const taskExists = Boolean(await this.tasksService.getByIdAndBoardId(id, boardId));
        console.log(5);
        if (taskExists) this.tasksService.deleteTask(id, boardId);
        console.log(6);
        return taskExists ? res.status(HttpStatus.NO_CONTENT).send() : res.status(HttpStatus.NOT_FOUND).send();
    };

};