import express, { Request, Response } from 'express';
import ParadaController from '../controllers/ParadaController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    await ParadaController.getAllParadasRota05volta(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
    await ParadaController.getParadaByIdRota05volta(req, res);
});

export default router;