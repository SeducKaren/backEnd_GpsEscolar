import { Pool } from "pg";


class LoginModel {
    static pool: Pool;

    static initialize() {
        LoginModel.pool = new Pool({
            ssl: {
                rejectUnauthorized: false,
            },
            connectionString: process.env.DATABASE_URL,
        });
    }

    
    login: string;
    password: string;
    nome_usuario: string;
    
        constructor(data: any) {
            this.login = data.login || undefined;
            this.password = data.password || undefined;
            this.nome_usuario = data.nome_usuario || undefined;
        }
        
        static async getAll(): Promise<LoginModel[]> {
                    const result = await this.pool.query('SELECT * FROM usuario');
                    return result.rows.map((data: any) => new LoginModel(data));
                    
        }

        static async findByLogin(login: string): Promise<LoginModel> {
                    const result = await this.pool.query('SELECT * FROM usuario WHERE email_usuario = $1', [login]);
                    return result.rows.map((data: any) => new LoginModel(data))[0];
                }
            
        // static async verifyPassword(senha: string): Promise<boolean | Error> {
        //             const result = await this.pool.query('SELECT senha_usuario FROM usuario WHERE email_usuario = $1', [senha]);
        //             const senhausuario = result.rows[0].senha_usuario;
        //             if (senha === senhausuario) {
        //                 return true;
        //             } else {
        //                 return new Error('Senha incorreta');
        //             }
        //         }

        static async verifyPassword(login: string, password: string): Promise<boolean | Error> {
            try {
                const result = await this.pool.query('SELECT senha_usuario FROM usuario WHERE email_usuario = $1', [login]);
                
                if (result.rows.length === 0) {
                    return new Error('Usuário não encontrado');
                }
                
                const senhaUsuario = result.rows[0].senha_usuario;
                
                // Comparação da senha fornecida com a senha armazenada no banco de dados
                if (password === senhaUsuario) {
                    return true;
                } else {
                    return new Error('Senha incorreta');
                }
            } catch (error) {
                return new Error('Erro ao verificar a senha');
            }
        }
        


}

LoginModel.initialize();

export default LoginModel;