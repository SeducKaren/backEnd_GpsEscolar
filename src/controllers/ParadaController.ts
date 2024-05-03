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

    static async getAllParadasRota04ida(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota04ida();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaByIdRota04ida(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota04ida(paradaId.toString());
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
    static async getAllParadasRota04volta(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota04volta();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaByIdRota04volta(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota04volta(paradaId.toString());
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
    static async getAllParadasRota05ida(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota05ida();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaByIdRota05ida(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota05ida(paradaId.toString());
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
    static async getAllParadasRota05volta(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota05volta();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaByIdRota05volta(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota05volta(paradaId.toString());
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
    
    static async getAllParadasRota06volta(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota06volta();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaByIdRota06volta(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota06volta(paradaId.toString());
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
    static async getAllParadasRota12(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota12();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaByIdRota12(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota12(paradaId.toString());
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
    static async getAllParadasRota17(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota17();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaByIdRota17(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota17(paradaId.toString());
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
    static async getAllParadasRota27(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllRota27();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    }


    static async getParadaByIdRota27(req: Request, res: Response): Promise<void> {
        const paradaId = parseInt(req.params.id);
        if (isNaN(paradaId)) {
            res.status(400).json({ message: "ID da parada inválido" });
            return;
        }
    
        try {
            const parada = await ParadaModel.findByIdRota27(paradaId.toString());
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

    static async getAllParadasTodasRotas(req: Request, res: Response): Promise<void> {
        try {
            const paradas = await ParadaModel.findAllParadasTodasRotas();
            res.status(200).json(paradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
export default ParadaController;