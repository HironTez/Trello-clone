import Router from 'express';
import User from './user.model';
import usersService from './user.service';
const router = Router();

// Get all users
router.route('/').get(async (_req, res) => {
    const users = await usersService.getAll(); // Get users
    res.json(users.map(User.toResponse)); // Return result without passwords
});

// Get user by id
router.route('/:id').get(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    if (user === undefined) return res.status(404).send(); // Error 404 if there is no user
    return res.json(User.toResponse(user));
});

// Create user
router.route('/').post(async (req, res) => {
    // Create new user
    const user = new User(req.body);
    await usersService.addUser(user)

    return res.status(201).json(User.toResponse(user));
});

// Update user
router.route('/:id').put(async (req, res) => {
    const userUpdated = await usersService.updateUser(req.params.id, req.body);
    return userUpdated? res.json(req.body): res.status(404).send();
});

// Delete user
router.route('/:id').delete(async (req, res) => {
    const userDeleted = usersService.deleteUser(req.params.id);
    return userDeleted? res.status(204).send(): res.status(404).send();
});

export = router;