import { Request, Response } from "express";
import db from '../database';
import pool from '../database';
import { PoolClient } from 'pg';
import UsuarioModel from "../models/usuarioModel";

// interface ExtendedRequest extends Request {
//     db?: PoolClient
// }

// const createUser = async (req: Request, res: Response) => {

    // try {
    //     const { nome_usuario, email, senha } = req.body;
    //     const newUser = await db.query('INSERT INTO users (nome_usuario, email, senha) VALUES($1, $2, $3) RETURNING *', [nome_usuario, email, senha]);
    //     res.status(201).json(newUser.rows);
    // } catch (error) {
    //     console.error('Error creating user:', error);
    //     res.status(500).json({error: 'Error creating user'});
    // }
//     try {
//         const { matricula_usuario,nome_usuario,
//             cpf_usuario,
//             email_usuario,
//             telefone_usuario,
//             dataNasc_usuario,
//             genero_usuario,
//             possuiDeficiencia_usuario,
//             deficiencia_usuario,
//             nomeResp_usuario,
//             grauPar_usuario,
//             turma_usuario,
//             serie_usuario,
//             escola_usuario,
//             uf_usuario,
//             cep_usuario,
//             cidade_usuario,
//             bairro_usuario,
//             rua_usuario,
//             numero_usuario,
//             complemento_usuario } = req.body;
//         const newUser = await db.query('INSERT INTO usuario (matricula_usuario,nome_usuario,cpf_usuario,email_usuario,telefone_usuario,dataNasc_usuario,genero_usuario,possuiDeficiencia_usuario,deficiencia_usuario,nomeResp_usuario,grauPar_usuario,turma_usuario,serie_usuario,escola_usuario,uf_usuario,cep_usuario,cidade_usuario,bairro_usuario,rua_usuario,numero_usuario,complemento_usuario) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *', 
//         [matricula_usuario,nome_usuario,
//                 cpf_usuario,
//                 email_usuario,
//                 telefone_usuario,
//                 dataNasc_usuario,
//                 genero_usuario,
//                 possuiDeficiencia_usuario,
//                 deficiencia_usuario,
//                 nomeResp_usuario,
//                 grauPar_usuario,
//                 turma_usuario,
//                 serie_usuario,
//                 escola_usuario,
//                 uf_usuario,
//                 cep_usuario,
//                 cidade_usuario,
//                 bairro_usuario,
//                 rua_usuario,
//                 numero_usuario,
//                 complemento_usuario]);
//         res.status(201).json(newUser.rows);
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({error: 'Error creating user'});
//     }

// };

// const allUser = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;
//         const user = await db.query('SELECT * FROM users');
//         res.status(200).json(user.rows);
//     } catch (error) {
//         console.error('Error ao buscar user:', error);
//         res.status(500).json({ error: 'Error ao buscar user'});
//     }

// };



// const getUserById = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;
//         const user = await db.query('SELECT * FROM users WHERE id = $1', id);
//         res.status(200).json(user);
//     } catch (error) {
//         console.error('Error ao buscar user:', error);
//         res.status(500).json({ error: 'Error ao buscar user'});
//     }

// };

// export { createUser, getUserById };
// export { createUser, allUser };

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
        const usuarioId = req.params.id;

        try {
            const usuario = await UsuarioModel.findById(usuarioId);
            if (usuario){
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ message: "Aluno não encontrado"});
            }
        } catch (error) {
            console.error('Error ao buscar usurário:', error);
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