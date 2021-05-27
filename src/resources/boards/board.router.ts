import Router from 'express';
import Board from './board.model';
import boardsService from './board.service';
const router = Router();

// Get all boards
router.route('/').get(async (_req, res) => {
  const boards = await boardsService.getAll(); // Get boards
  res.json(boards); // Return result
});

// Get board by id
router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  if (board === undefined) return res.status(404).send(); // Error 404 if there is no board
  return res.json(board);
});

// Create board
router.route('/').post(async (req, res) => {
  // Data validation
  if (!boardsService.dataValidation(req.body)) return res.status(422).send();
  // Create new board
  const board = new Board(req.body);
  boardsService.addBoard(board);

  return res.status(201).json(board);
});

// Update board
router.route('/:id').put(async (req, res) => {
  if (!boardsService.dataValidation(req.body)) return res.status(422).send();
  const boardUpdated = boardsService.updateBoard(req.params.id, req.body);
  req.body.id = req.params.id;
  return boardUpdated? res.json(req.body): res.status(404).send();
});

// Delete board
router.route('/:id').delete(async (req, res) => {
  const boardDeleted = boardsService.deleteBoard(req.params.id);
  return boardDeleted? res.status(204).send(): res.status(404).send();
});

export = router;