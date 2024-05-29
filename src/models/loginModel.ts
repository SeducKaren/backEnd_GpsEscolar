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
    latitude_parada_favorita1: number;
    longitude_parada_favorita1: number;
    latitude_parada_favorita2: number;
    longitude_parada_favorita2: number;
    contatoemergencia1_usuario: number;
    contatoemergencia2_usuario: number;
    
        constructor(data: any) {
            this.login = data.login || undefined;
            this.password = data.password || undefined;
            this.nome_usuario = data.nome_usuario || undefined;
            this.latitude_parada_favorita1 = parseFloat(data.latitude_parada_favorita1);
            this.longitude_parada_favorita1 = parseFloat(data.longitude_parada_favorita1);
            this.latitude_parada_favorita2 = parseFloat(data.latitude_parada_favorita2);
            this.longitude_parada_favorita2 = parseFloat(data.longitude_parada_favorita2);
            this.contatoemergencia1_usuario = parseInt(data.contatoemergencia1_usuario);
            this.contatoemergencia2_usuario = parseInt(data.contatoemergencia2_usuario);
        }
        
        static async getAll(): Promise<LoginModel[]> {
                    const result = await this.pool.query('SELECT * FROM usuario');
                    return result.rows.map((data: any) => new LoginModel(data));
                    
        }

        // static async findByLogin(login: string): Promise<LoginModel> {                    
        //             const result = await this.pool.query('SELECT * FROM usuario WHERE email_usuario = $1', [login]);
        //             return result.rows.map((data: any) => new LoginModel(data))[0];
        //         }

        static async findByLogin(login: string): Promise<LoginModel> {
            const result = await this.pool.query(
                'SELECT nome_usuario, latitude_parada_favorita1, longitude_parada_favorita1, latitude_parada_favorita2, longitude_parada_favorita2, contatoemergencia1_usuario, contatoemergencia2_usuario FROM usuario3 WHERE email_usuario = $1', 
                [login]
            );
            return result.rows.map((data: any) => new LoginModel(data))[0];
        }
        
            

        // static async verifyPassword(login: string, password: string): Promise<boolean | Error> {
        //     try {
        //         const result = await this.pool.query('SELECT senha_usuario FROM usuario WHERE email_usuario = $1', [login]);
                
        //         if (result.rows.length === 0) {
        //             return new Error('Usuário não encontrado');
        //         }
                
        //         const senhaUsuario = result.rows[0].senha_usuario;
                
        //         // Comparação da senha fornecida com a senha armazenada no banco de dados
        //         if (password === senhaUsuario) {
        //             return true;
        //         } else {
        //             return new Error('Senha incorreta');
        //         }
        //     } catch (error) {
        //         return new Error('Erro ao verificar a senha');
        //     }
        // }
        
        static async verifyPassword(login: string, password: string): Promise<boolean | Error> {
            try {
                const result = await this.pool.query('SELECT senha_usuario FROM usuario3 WHERE email_usuario = $1', [login]);
                
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