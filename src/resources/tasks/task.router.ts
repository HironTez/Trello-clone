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
    if (task === undefined) return res.status(404).send(); // Error 404 if there is no task
    return res.json(Task.toResponse(task));
});

// Create task
router.route('/').post(async (req, res) => {
    const boardId = req.baseUrl.split('/')[2];
    req.body.boardId = boardId;
    // Create new task
    const task = new Task(req.body);
    tasksService.addTask(task);
    
    return res.status(201).json(Task.toResponse(task));
});

// Update task
router.route('/:id').put(async (req, res) => {
    const boardId = req.baseUrl.split('/')[2];
    const taskUpdated = tasksService.updateTask(req.params.id, boardId, req.body);
    return taskUpdated? res.json(req.body): res.status(404).send();
});

// Delete task
router.route('/:id').delete(async (req, res) => {
    const boardId = req.baseUrl.split('/')[2];
    const taskDeleted = tasksService.deleteTask(req.params.id, boardId);
    return taskDeleted? res.status(204).send(): res.status(404).send();
});

export = router;