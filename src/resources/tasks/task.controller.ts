import { Controller, Res, Get, Post, Put, Delete, Param, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { TaskDataDto } from './dto/task-data.dto';
import { getAllTasksByBoardId, getByIdAndBoardId, addTask, updateTask, deleteTask } from './task.service';
import Task from './task.model';

@Controller('boards/:boardId/tasks')
export class TasksController {

    @Get('')
    async getTasksByBoardId(@Res() res: Response, @Param('boardId') boardId: string) {
        const tasks = await getAllTasksByBoardId(boardId);
        return res.status(HttpStatus.OK).send(tasks.map(Task.toResponse));
    };

    @Get(':id')
    async getTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string) {
        const task = await getByIdAndBoardId(id, boardId);
        return task ? res.status(HttpStatus.OK).send(Task.toResponse(task)) : res.status(HttpStatus.NOT_FOUND).send();
    };

    @Post()
    async createTask(@Res() res: Response, @Param('boardId') boardId: string, @Body() body: TaskDataDto) {
        body.boardId = boardId;
        const newTask = new Task(body);
        const taskCreated = await addTask(newTask);
        return taskCreated ? res.status(HttpStatus.CREATED).send(Task.toResponse(newTask)) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Put(':id')
    async updateTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string, @Body() body: TaskDataDto) {
        const newTask = new Task(body);
        const taskUpdated = await updateTask(id, boardId, newTask);
        return taskUpdated ? res.status(HttpStatus.OK).send(taskUpdated) : res.status(HttpStatus.BAD_REQUEST).send(); // + (404)
    };

    @Delete(':id')
    async deleteTaskById(@Res() res: Response, @Param('id') id: string, @Param('boardId') boardId: string) {
        const taskDeleted = await deleteTask(id, boardId);
        return taskDeleted ? res.status(HttpStatus.NO_CONTENT).send() : res.status(HttpStatus.NOT_FOUND).send();
    };

};