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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const user_model_1 = require("../users/user.model");
const board_model_1 = require("../boards/board.model");
let Task = class Task extends typeorm_1.BaseEntity {
    constructor({ id = uuid_1.v4(), title = 'TASK', description = 'task', userId = 'task', boardId = 'board', columnId = 'column', order = 0 } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.order = order;
    }
    ;
    static toResponse(task) {
        const { id, title, description, userId, boardId, columnId, order } = task;
        return { id, title, description, userId, boardId, columnId, order };
    }
    ;
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_model_1.User, { onDelete: 'SET NULL' }),
    __metadata("design:type", user_model_1.User)
], Task.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Object)
], Task.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => board_model_1.Board, { onDelete: 'CASCADE' }),
    __metadata("design:type", board_model_1.Board)
], Task.prototype, "board", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "boardId", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", Object)
], Task.prototype, "columnId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
Task = __decorate([
    typeorm_1.Entity('Task'),
    __metadata("design:paramtypes", [Object])
], Task);
exports.Task = Task;
;
//# sourceMappingURL=task.model.js.map