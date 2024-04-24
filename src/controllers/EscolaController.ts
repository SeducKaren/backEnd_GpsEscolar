
//testando

import { Request, Response } from "express";
import db from '../database';
import { log } from "console";
import { Escola } from "../models/Escola";
import EscolaModel from "../models/escolaModel";


class EscolaContoller {

    // static async getAllEscolas(req: Request, res: Response): Promise<void> {
    //     try {
    //         const escolas = await EscolaModel.findAll();
    //         res.status(200).json(escolas);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ message: "internal server error"});
            
    //     }
    // }
    static async getAllEscolas(req: Request, res: Response): Promise<void> {
        try {
            const escolas = await EscolaModel.findAll();
            const simplifiedEscolas = escolas.map(escola => ({
                id_escola: escola.id_escola,
                nome_escola: escola.nome_escola,
                latitude: escola.latitude,
                longitude: escola.longitude,
            }));
            res.status(200).json(simplifiedEscolas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "internal server error"});
            
        }
    }
    
    // funcionando 
    // static getAllEscolas = async (req: Request, res: Response) => {
    //     try {
    //         const escolas = await db.query('SELECT * FROM escola');
    //         res.status(200).json(escolas);
    //     } catch (error) {
    //         console.error('Error ao listar escolas', error);
    //         res.status(500).json({ error: 'Error ao listar escolas' });
    //     }
    // };
}
// const listEscolas = async (req: Request, res: Response) => {
//     try {
//         const escolas = await db.query('SELECT * FROM escola');
//         res.status(200).json(escolas);
//     } catch (error) {
//         console.error('Error ao listar escolas', error);
//         res.status(500).json({ error: 'Error ao listar escolas' });
//     }
// };


export default EscolaContoller;
// export { getAllEscolas };