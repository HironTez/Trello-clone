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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const board_data_dto_1 = require("./dto/board-data.dto");
const board_service_1 = require("./board.service");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let BoardsController = class BoardsController {
    constructor(boardsService) {
        this.boardsService = boardsService;
    }
    ;
    async getAllBoards(res) {
        const boards = await this.boardsService.getAllBoards();
        return res.status(common_1.HttpStatus.OK).send(boards);
    }
    ;
    async getBoardById(res, id) {
        const board = await this.boardsService.getById(id);
        return board ? res.status(common_1.HttpStatus.OK).send(board) : res.status(common_1.HttpStatus.NOT_FOUND).send();
    }
    ;
    async createBoard(res, body) {
        const createdBoard = await this.boardsService.addBoard(body);
        return createdBoard ? res.status(common_1.HttpStatus.CREATED).send(body) : res.status(common_1.HttpStatus.BAD_REQUEST).send();
    }
    ;
    async updateBoardById(res, id, body) {
        const updatedBoard = await this.boardsService.updateBoard(id, body.title);
        return updatedBoard ? res.status(common_1.HttpStatus.OK).send(body) : res.status(common_1.HttpStatus.BAD_REQUEST).send();
    }
    ;
    async deleteBoardById(res, id) {
        const board = await this.boardsService.getById(id);
        if (board)
            this.boardsService.deleteBoard(id);
        return board ? res.status(common_1.HttpStatus.NO_CONTENT).send() : res.status(common_1.HttpStatus.NOT_FOUND).send();
    }
    ;
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getAllBoards", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getBoardById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, board_data_dto_1.BoardDataDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "createBoard", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, board_data_dto_1.BoardDataDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "updateBoardById", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "deleteBoardById", null);
BoardsController = __decorate([
    common_1.Controller('boards'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [board_service_1.BoardsService])
], BoardsController);
exports.BoardsController = BoardsController;
;
//# sourceMappingURL=board.controller.js.map