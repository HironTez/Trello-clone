"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");
class Board {
    constructor({ id = uuid_1.v4(), title = 'BOARD', columns = [] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns.map((column) => {
            const result = column;
            result.id = uuid_1.v4();
            return result;
        });
    }
    ;
}
exports.Board = Board;
;
//# sourceMappingURL=board.model.js.map