import { Request, Response } from "express";
import ParadaModel from "../models/paradaModel";

class ParadaController {

    static async getAllParadas(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAll();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaById(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findById(paradaId.toString());
            if (parada) {
                res.status(200).json(parada);
            } else {
                res.status(404).json({ message: "Parada não encontrada" });
            }
        } catch (error) {
            console.error('Erro ao buscar parada:', error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    static async getAllParadasRota06(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota06();
            res.status(200).json(paradas);
        } catch(error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    
    }

    static async getParadaByIdRota06(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota06(paradaId.toString());
            if (parada) {
                res.status(200).json(parada);
            } else {
                res.status(404).json({ message: "Parada não encontrada" });
            }
        } catch(error) {
            console.error('Erro ao encontrar parada:', error);
            res.status(500).json({ message: "Internal server error"});
        }
    }

    static async getAllParadasRota08(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota08();
            res.status(200).json(paradas);
        } catch(error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
}
    static async getParadaByIdRota08(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if(isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
        try {
            const parada = await ParadaModel.findByIdRota08(paradaId.toString());
            if(parada) {
                res.status(200).json(parada);
            } else {
                res.status(404).json({ message: "Parada não encontrada" });
            }
        } catch(error) {
            console.error('Erro ao encontrar parada:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
export default ParadaController;