import { Request, Response } from "express";
import RotasModel from "../models/rotasModel";


class RotasController {

    static async getAllRotas(req: Request, res: Response): Promise<void> {
        try {
            const rotas = await RotasModel.findAll();
            res.status(200).json(rotas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "internal server error"});
            
        }
    }
    

}
export default RotasController;