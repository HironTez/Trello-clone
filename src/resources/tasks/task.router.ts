import Router from 'express';
import Task from './task.model';
import tasksService from './task.service';
const router = Router();

// Get all tasks
router.route('/').get(async (req, res) => {
    const boardId = req.baseUrl.split('/')[2]; // Get board id
    const tasks = await tasksService.getAllByBoard(boardId); // Get tasks
    res.json(tasks.map(Task.toResponse)); // Return result
});

// Get task by id
router.route('/:id').get(async (req, res) => {
    const boardId = req.baseUrl.split('/')[2];
    const task = await tasksService.getById(req.params.id, boardId);
    res.json(Task.toResponse(task!));
});

// Create task
router.route('/').post(async (req, res) => {
    const boardId = req.baseUrl.split('/')[2];
    req.body.boardId = boardId;
    // Create new task
    const task = new Task(req.body);
    tasksService.addTask(task);
    
    res.status(201).json(Task.toResponse(task));
});

// Update task
router.route('/:id').put(async (req, res) => {
    const boardId = req.baseUrl.split('/')[2];
    tasksService.updateTask(req.params.id, boardId, req.body)
        .then(() => res.json(req.body));
});

// Delete task
router.route('/:id').delete(async (req, res) => {
    const boardId = req.baseUrl.split('/')[2];
    tasksService.deleteTask(req.params.id, boardId)
        .then(() => res.status(204).send());
});

export = router;