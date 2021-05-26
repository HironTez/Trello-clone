const uuid = require('uuid').v4;

class Board {
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(column => {
      const result = column;
      result.id = uuid();
      return result;
    });
  }
}

module.exports = Board;
