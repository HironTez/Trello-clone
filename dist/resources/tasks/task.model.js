"use strict";
const uuid_1 = require("uuid");
class Task {
    constructor({ id = uuid_1.v4(), title = 'TASK', description = 'task', userId = 'task', boardId = 'board', columnId = 'column', order = 0 } = {}) {
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
}
;
module.exports = Task;
//# sourceMappingURL=task.model.js.map