"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const task_data_dto_1 = require("./dto/task-data.dto");
const task_service_1 = require("./task.service");
const task_model_1 = require("./task.model");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const tools_1 = require("../../tools/tools");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    ;
    async getTasksByBoardId(res, boardId) {
        await tools_1.sleep(10);
        const tasks = await this.tasksService.getAllTasksByBoardId(boardId);
        return res.status(common_1.HttpStatus.OK).send(tasks.map(task_model_1.Task.toResponse));
    }
    ;
    async getTaskById(res, id, boardId) {
        await tools_1.sleep(10);
        const task = await this.tasksService.getByIdAndBoardId(id, boardId);
        return task ? res.status(common_1.HttpStatus.OK).send(task_model_1.Task.toResponse(task)) : res.status(common_1.HttpStatus.NOT_FOUND).send();
    }
    ;
    async createTask(res, boardId, body) {
        await tools_1.sleep(10);
        body.boardId = boardId;
        const newTask = new task_model_1.Task(body);
        const taskCreated = await this.tasksService.addTask(newTask);
        return taskCreated ? res.status(common_1.HttpStatus.CREATED).send(task_model_1.Task.toResponse(newTask)) : res.status(common_1.HttpStatus.BAD_REQUEST).send();
    }
    ;
    async updateTaskById(res, id, boardId, body) {
        await tools_1.sleep(10);
        body.id = id;
        const newTask = new task_model_1.Task(body);
        const taskUpdated = await this.tasksService.updateTask(id, boardId, newTask);
        return taskUpdated ? res.status(common_1.HttpStatus.OK).send(taskUpdated) : res.status(common_1.HttpStatus.BAD_REQUEST).send();
    }
    ;
    async deleteTaskById(res, id, boardId) {
        await tools_1.sleep(10);
        const taskExists = Boolean(await this.tasksService.getByIdAndBoardId(id, boardId));
        if (taskExists)
            this.tasksService.deleteTask(id, boardId);
        return taskExists ? res.status(common_1.HttpStatus.NO_CONTENT).send() : res.status(common_1.HttpStatus.NOT_FOUND).send();
    }
    ;
};
__decorate([
    common_1.Get(''),
    __param(0, common_1.Res()), __param(1, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTasksByBoardId", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTaskById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Param('boardId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, task_data_dto_1.TaskDataDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createTask", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Param('boardId')), __param(3, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, task_data_dto_1.TaskDataDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateTaskById", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTaskById", null);
TasksController = __decorate([
    common_1.Controller('boards/:boardId/tasks'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [task_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
;
//# sourceMappingURL=task.controller.js.map