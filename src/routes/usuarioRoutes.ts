import express, { Request, Response } from "express";
// import { createUser, getUserById } from "../controllers/UsuarioController";
// import { allUser, createUser,  } from "../controllers/UsuarioController";
import UsuarioController from "../controllers/UsuarioController";
import { assert } from "console";

const router = express.Router();

// router.post('/usuario', createUser);
// router.get('/:id', getUserById);
router.get('/', async (req: Request, res: Response) => {
    try {
        await UsuarioController.getAllUsuario(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/:id', async (req: Request, res: Response) =>{
    await UsuarioController.getUsuarioById(req, res);
    
});


router.post('/', async (req: Request, res: Response) => {
    await UsuarioController.createUsuario(req, res);
});


router.put("/:id", async (req: Request, res: Response) => {
    await UsuarioController.updateUsuario(req, res);
});


export default router;