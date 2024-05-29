import { Request, Response } from "express";
import db from '../database';
import pool from '../database';
import { PoolClient } from 'pg';
import UsuarioModel from "../models/usuarioModel";

class UsuarioController {

    static async getAllUsuario (req: Request, res: Response): Promise<void>{

        try {
            const usuarios = await UsuarioModel.getAll();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error('Error ao buscar usurário:', error);
            res.status(500).json({ error: 'Error ao buscar user'});
        }
    
    };

    static async getUsuarioById (req: Request, res: Response): Promise<void>{
        const usuarioId = parseInt(req.params.id);
        if (isNaN(usuarioId)) {
            res.status(400).json({ message: "ID de usuario inválido" });
            return;
        }

        try {
            const usuario = await UsuarioModel.findById(usuarioId.toString());
            if (usuario){
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ message: "Usuário não encontrado"});
            }
        } catch (error) {
            console.error('Error ao buscar usuário:', error);
            res.status(500).json({ message: 'Internal server error'});
        }
    
    }


    static async createUsuario (req: Request, res: Response): Promise<void> {
        const usuarioData = req.body;
        try {
            const newUsuario = new UsuarioModel(usuarioData);
            const savedUsuario = await newUsuario.save();
            res.status(201).json(savedUsuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "internal server error"});
        }

    }

    static async updateUsuario(req: Request, res: Response): Promise<void> {
        const usuarioId = req.params.id;
        const updatedUsuarioData = req.body;

        try {
            const existingUsuario = await UsuarioModel.findById(usuarioId);

            if(existingUsuario) {
                const updatedUsuario = new UsuarioModel({
                    ...existingUsuario,
                    ...updatedUsuarioData,
                });

                await updatedUsuario.update();
                res.status(200).json(updatedUsuario);
            } else {
                res.status(404).json({ message: "Usuario not found"});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error"});
            
        }
    }

}

export default UsuarioController;