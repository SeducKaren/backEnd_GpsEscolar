import express, { Request, Response } from 'express';
// import { listEscolas } from '../controllers/EscolaController';
import RotasController from '../controllers/RotasController';


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    await RotasController.getAllRotas(req, res);
})

export default router;