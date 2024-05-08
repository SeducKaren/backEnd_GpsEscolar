import { Request, Response } from "express";
import LoginModel from "../models/loginModel";

class LoginController {


    static async authLogin(req: Request, res: Response): Promise<void> {
        const { login, password } = req.body;
        
        try {
            const user = await LoginModel.findByLogin(login);
            
            if (user) {
                const isPasswordCorrect = await LoginModel.verifyPassword(login, password);

                if (isPasswordCorrect === true) {
                    res.status(200).json({ message: 'Login realizado com sucesso' });
                } else {
                    res.status(401).json({ message: 'Senha incorreta' });
                }
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao realizar login', error });
        }
    }

}

export default LoginController;