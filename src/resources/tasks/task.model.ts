import {v4 as uuid} from 'uuid';
import {Task as TaskType} from '../../types';

class Task {
  public id: string;
  public title: string;
  public description: string;
  public userId: string;
  public boardId: string;
  public columnId: string;
  public order: number;

  constructor({
    id = uuid(),
    title = 'TASK',
    description = 'task',
    userId = 'user',
    boardId = 'board',
    columnId = 'column',
    order = 0
  } = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
    this.order = order;
  }

  static toResponse(task: TaskType) {
    const { id, title, description, userId, boardId, columnId, order } = task;
    return { id, title, description, userId, boardId, columnId, order };
  }
}

export = Task;