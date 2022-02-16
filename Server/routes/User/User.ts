
import express, { Request, Response } from 'express';
import { userController } from '../../controllers/index';

export const router = express.Router({
    strict: true
});

// export const router = express();

router.post('/', (req: Request, res: Response) => {
    userController.create(req, res);
});

router.get('/',userController.read, (req: Request, res: Response) => {
    console.log("in user router")
    // userController.read(req, res);
    console.log("this is res.locals", res.locals.details)
    res.status(200).json(res.locals.details);
});

router.patch('/', (req: Request, res: Response) => {
    userController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    userController.delete(req, res);
});