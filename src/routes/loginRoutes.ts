import express, { Request, Response } from 'express';
import LoginController from "../controllers/LoginController";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await LoginController.authLogin(req, res);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.post('/', async (req, res) => {
    try {
        const result = await LoginController.authLogin(req, res);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});
// router.get('/', LoginController.authLogin);

export default router;