import express, { Request, Response } from 'express';
import ParadaController from '../controllers/ParadaController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    await ParadaController.getAllParadasRota08(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
    await ParadaController.getParadaByIdRota08(req, res);
});

export default router;