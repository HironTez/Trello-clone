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
exports.TasksService = void 0;
const task_model_1 = require("./task.model");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
        this.getAllTasksByBoardId = async (boardId) => await this.tasksRepository.find({ boardId: boardId });
        this.getByIdAndBoardId = async (id, boardId) => await this.tasksRepository.findOne({ id: id, boardId: boardId });
        this.addTask = async (task) => Boolean(await this.tasksRepository.save(task));
        this.updateTask = async (id, boardId, newTask) => Boolean(this.tasksRepository.save({ ...(await this.getByIdAndBoardId(id, boardId)), ...newTask }));
        this.deleteTask = (id, boardId) => this.tasksRepository.delete({ id: id, boardId: boardId });
    }
    ;
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_model_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
exports.TasksService = TasksService;
;
//# sourceMappingURL=task.service.js.map