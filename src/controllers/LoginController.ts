import { Request, Response } from "express";
import LoginModel from "../models/loginModel";

// class LoginController {


//     static async authLogin(req: Request, res: Response): Promise<void> {
//         const { email, password } = req.body;
        
//         try {
//             const user = await LoginModel.findByLogin(email);
            
//             if (user) {
//                 const isPasswordCorrect = await LoginModel.verifyPassword(email, password);

//                 if (isPasswordCorrect === true) {
//                     res.status(200).json({ message: 'Login realizado com sucesso' });
//                 } else {
//                     res.status(401).json({ message: 'Senha incorreta' });
//                 }
//             } else {
//                 res.status(404).json({ message: 'Usuário não encontrado' });
//             }
//         } catch (error) {
//             res.status(500).json({ message: 'Erro ao realizar login', error });
//         }
//     }

// }

// export default LoginController;

class LoginController {
    static async authLogin(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        
        try {
            const user = await LoginModel.findByLogin(email);
            
            if (user) {
                const isPasswordCorrect = await LoginModel.verifyPassword(email, password);

                if (isPasswordCorrect === true) {
                    res.status(200).json({ message: 'Login realizado com sucesso' });
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
