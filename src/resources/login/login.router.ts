import { Router, Request, Response } from 'express';
import userLogin from './login.service';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const { login, password } = req.body;
    const token = await userLogin(login, password);
    if (token) {
        return res.json({ token: token });
    };
    return res.status(403).send();
});

export = router;