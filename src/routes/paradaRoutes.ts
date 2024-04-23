import express, { Request, Response } from 'express';
import ParadaController from '../controllers/ParadaController';


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    await ParadaController.getAllParadas(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
    await ParadaController.getParadaById(req, res);
});



export default router;