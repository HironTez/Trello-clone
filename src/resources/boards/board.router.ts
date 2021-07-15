import Router from 'express';
import Board from './board.model';
import boardsService from './board.service';

const router = Router();

// Get all boards
router.route('/').get(async (_req, res) => {
    const boards = await boardsService.getAll(); // Get boards
    res.json(boards); // Return resultS
});

// Get board by id
router.route('/:id').get(async (req, res) => {
    const board = await boardsService.getById(req.params.id);
    res.json(board);
});

// Create board
router.route('/').post(async (req, res) => {
    // Create new board
    const board = new Board(req.body);
    boardsService.addBoard(board);

    res.status(201).json(board);
});

// Update board
router.route('/:id').put(async (req, res) => {
    req.body.id = req.params.id;
    boardsService.updateBoard(req.params.id, req.body)
        .then(() => res.json(req.body));
    
});

// Delete board
router.route('/:id').delete(async (req, res) => {
    boardsService.deleteBoard(req.params.id)
        .then(() => res.status(204).send());
});

export = router;