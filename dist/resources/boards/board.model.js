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
exports.Board = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
let Board = class Board extends typeorm_1.BaseEntity {
    constructor({ id = uuid_1.v4(), title = 'BOARD', columns = [] } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.columns = columns.map((column) => {
            const result = column;
            result.id = uuid_1.v4();
            return result;
        });
    }
    ;
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Board.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('json'),
    __metadata("design:type", Array)
], Board.prototype, "columns", void 0);
Board = __decorate([
    typeorm_1.Entity('Board'),
    __metadata("design:paramtypes", [Object])
], Board);
exports.Board = Board;
;
//# sourceMappingURL=board.model.js.map