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
    res.json(User.toResponse(user!));
});

// Create user
router.route('/').post(async (req, res) => {
    // Create new user
    const user = new User(req.body);
    usersService.addUser(user);

    res.status(201).json(User.toResponse(user));
});

// Update user
router.route('/:id').put(async (req, res) => {
    usersService.updateUser(req.params.id, req.body)
        .then(() => res.json(req.body));
});

// Delete user
router.route('/:id').delete(async (req, res) => {
    usersService.deleteUser(req.params.id)
        .then(() => res.status(204).send());
    
});

export = router;