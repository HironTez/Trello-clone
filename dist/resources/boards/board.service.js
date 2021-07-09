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
exports.BoardsService = void 0;
const board_model_1 = require("./board.model");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let BoardsService = class BoardsService {
    constructor(boardsRepository) {
        this.boardsRepository = boardsRepository;
        this.getAllBoards = async () => this.boardsRepository.find();
        this.getById = async (id) => this.boardsRepository.findOne(id);
        this.addBoard = async (board) => Boolean(this.boardsRepository.save(board));
        this.updateBoard = async (id, newBoard) => {
            const board = await this.getById(id);
            if (!board)
                return false;
            return Boolean(await this.boardsRepository.save({ ...board, ...newBoard }));
        };
        this.deleteBoard = (id) => this.boardsRepository.delete(id);
    }
    ;
};
BoardsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(board_model_1.Board)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardsService);
exports.BoardsService = BoardsService;
;
//# sourceMappingURL=board.service.js.map