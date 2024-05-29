import { Request, Response } from "express";
import LoginModel from "../models/loginModel";

class LoginController {
    static async authLogin(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        try {
            const user = await LoginModel.findByLogin(email);
            
            if (user) {
                const isPasswordCorrect = await LoginModel.verifyPassword(email, password);

                if (isPasswordCorrect === true) {
                    res.status(200).json({ 
                        message: 'Login realizado com sucesso', 
                        user: {
                            nome_usuario: user.nome_usuario,
                            latitude_parada_favorita1: user.latitude_parada_favorita1,
                            longitude_parada_favorita1: user.longitude_parada_favorita1,
                            latitude_parada_favorita2: user.latitude_parada_favorita2,
                            longitude_parada_favorita2: user.longitude_parada_favorita2,
                            contatoemergencia1_usuario: user.contatoemergencia1_usuario,
                            contatoemergencia2_usuario: user.contatoemergencia2_usuario,
                        }
                    });
                } else {
                    res.status(401).json({ message: 'Senha incorreta' });
                }
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error: any) {
            res.status(500).json({ message: 'Erro ao realizar login', error: error.message });
        }
    }
}

export default LoginController;
