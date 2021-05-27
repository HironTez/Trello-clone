import {v4 as uuid} from 'uuid';
import {Column} from '../../types';

class Board {
  public id: string;
  public title: string;
  public columns: Array<Column>;

  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((column: Column) => {
      const result = column;
      result.id = uuid();
      return result;
    });
  }
}

export = Board;