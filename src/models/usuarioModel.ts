// import { Pool } from "pg";


// class UsuarioModel {
//     static pool: Pool;

//     static initialize() {
//         UsuarioModel.pool = new Pool({
//             ssl: {
//                 rejectUnauthorized: false,
//             },
//             connectionString: process.env.DATABASE_URL,
//         });
//     }

        
//         id_usuario: string;
//         nome_usuario: string;
//         cpf_usuario: string;
//         datanascimento_usuario: string;
//         genero_usuario: string;
//         possuideficiencia_usuario: string;
//         nomeresponsavel_usuario: string;
//         grauparentesco_usuario: string;
//         email_usuario: string;
//         senha_usuario: string;
//         endereco_usuario: string;
//         escola_usuario: string;
//         serie_usuario: string;
//         turma_usuario: string;
        
        
    
//         constructor(data:any) {
//             this.id_usuario = data.id_usuario || undefined;
//             this.nome_usuario = data.nome_usuario || undefined;
//             this.cpf_usuario = data.cpf_usuario || undefined;
//             this.datanascimento_usuario = data.datanascimento_usuario || undefined;
//             this.genero_usuario = data.genero_usuario || undefined;
//             this.possuideficiencia_usuario = data.possuideficiencia_usuario || undefined;
//             this.nomeresponsavel_usuario = data.nomeresponsavel_usuario || undefined;
//             this.grauparentesco_usuario = data.grauparentesco_usuario || undefined;
//             this.email_usuario = data.email_usuario || undefined;
//             this.senha_usuario = data.senha_usuario || undefined;
//             this.endereco_usuario = data.endereco_usuario || undefined;
//             this.escola_usuario = data.escola_usuario || undefined;
//             this.serie_usuario = data.serie_usuario || undefined;
//             this.turma_usuario = data.turma_usuario || undefined;
//         }

        
//         static async getAll(): Promise<UsuarioModel[]> {
//                     const result = await this.pool.query('SELECT * FROM usuario');
//                     return result.rows.map((data: any) => new UsuarioModel(data));
                    
//         }

//         static async findById(id: string): Promise<UsuarioModel | undefined> {
//             const result = await this.pool.query(
//               `
//               SELECT *
//               FROM usuario
//               WHERE id_usuario = $1
//             `,
//               [id]
//             );
//             return result.rows[0] ? new UsuarioModel(result.rows[0]) : undefined;
//           }
        

//         async save(): Promise<UsuarioModel> {
//                     const result = await UsuarioModel.pool.query('INSERT INTO usuario (nome_usuario,cpf_usuario,datanascimento_usuario,genero_usuario,possuideficiencia_usuario,nomeresponsavel_usuario,grauparentesco_usuario,email_usuario,senha_usuario,endereco_usuario,escola_usuario,serie_usuario,turma_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *', 
//                     [
//                         this.nome_usuario,
//                         this.cpf_usuario,
//                         this.datanascimento_usuario,
//                         this.genero_usuario,
//                         this.possuideficiencia_usuario,
//                         this.nomeresponsavel_usuario,
//                         this.grauparentesco_usuario,
//                         this.email_usuario,
//                         this.senha_usuario,
//                         this.endereco_usuario,
//                         this.escola_usuario,
//                         this.serie_usuario,
//                         this.turma_usuario,
                    
//                     ]
//                     );
//                     return new UsuarioModel(result.rows[0]);
//                 }

    


//         async update(): Promise<void> {
//           await UsuarioModel.pool.query(
//               `
//               UPDATE usuario
//               SET
//                   nome_usuario = $1,
//                   cpf_usuario = $2,
//                   datanascimento_usuario = $3,
//                   genero_usuario = $4,
//                   possuideficiencia_usuario = $5,
//                   nomeresponsavel_usuario = $6,
//                   grauparentesco_usuario = $7,
//                   email_usuario = $8,
//                   senha_usuario = $9,
//                   endereco_usuario = $10,
//                   escola_usuario = $11,
//                   serie_usuario = $12,
//                   turma_usuario = $13
//               WHERE id_usuario = $14
//               `,
//               [
//                   this.nome_usuario,
//                   this.cpf_usuario,
//                   this.datanascimento_usuario,
//                   this.genero_usuario,
//                   this.possuideficiencia_usuario,
//                   this.nomeresponsavel_usuario,
//                   this.grauparentesco_usuario,
//                   this.email_usuario,
//                   this.senha_usuario,
//                   this.endereco_usuario,
//                   this.escola_usuario,
//                   this.serie_usuario,
//                   this.turma_usuario,
//                   this.id_usuario,
//               ]
//           );
//       }
      


// }

// UsuarioModel.initialize();

// export default UsuarioModel;
import { Pool } from "pg";


class UsuarioModel {
    static pool: Pool;

    static initialize() {
        UsuarioModel.pool = new Pool({
            ssl: {
                rejectUnauthorized: false,
            },
            connectionString: process.env.DATABASE_URL,
        });
    }

        
        id_usuario: string;
        nome_usuario: string;
        cpf_usuario: string;
        datanascimento_usuario: string;
        genero_usuario: string;
        possuideficiencia_usuario: string;
        nomeresponsavel_usuario: string;
        grauparentesco_usuario: string;
        email_usuario: string;
        senha_usuario: string;
        endereco_usuario: string;
        escola_usuario: string;
        serie_usuario: string;
        turma_usuario: string;
        latitude_parada_favorita1: string;
        longitude_parada_favorita1: string;
        latitude_parada_favorita2: string;
        longitude_parada_favorita2: string;
        contatoemergencia1_usuario: string;
        contatoemergencia2_usuario: string;
        
        
    
        constructor(data:any) {
            this.id_usuario = data.id_usuario || undefined;
            this.nome_usuario = data.nome_usuario || undefined;
            this.cpf_usuario = data.cpf_usuario || undefined;
            this.datanascimento_usuario = data.datanascimento_usuario || undefined;
            this.genero_usuario = data.genero_usuario || undefined;
            this.possuideficiencia_usuario = data.possuideficiencia_usuario || undefined;
            this.nomeresponsavel_usuario = data.nomeresponsavel_usuario || undefined;
            this.grauparentesco_usuario = data.grauparentesco_usuario || undefined;
            this.email_usuario = data.email_usuario || undefined;
            this.senha_usuario = data.senha_usuario || undefined;
            this.endereco_usuario = data.endereco_usuario || undefined;
            this.escola_usuario = data.escola_usuario || undefined;
            this.serie_usuario = data.serie_usuario || undefined;
            this.turma_usuario = data.turma_usuario || undefined;
            this.latitude_parada_favorita1 = data.latitude_parada_favorita1 || undefined;
            this.longitude_parada_favorita1 = data.longitude_parada_favorita1 || undefined;
            this.latitude_parada_favorita2 = data.latitude_parada_favorita1 || undefined;
            this.longitude_parada_favorita2 = data.longitude_parada_favorita1 || undefined;
            this.contatoemergencia1_usuario = data.contatoemergencia1_usuario || undefined;
            this.contatoemergencia2_usuario = data.contatoemergencia2_usuario || undefined;
        }

        
        static async getAll(): Promise<UsuarioModel[]> {
                    const result = await this.pool.query('SELECT * FROM usuario3');
                    return result.rows.map((data: any) => new UsuarioModel(data));
                    
        }

        static async findById(id: string): Promise<UsuarioModel | undefined> {
            const result = await this.pool.query(
              `
              SELECT *
              FROM usuario3
              WHERE id_usuario = $1
            `,
              [id]
            );
            return result.rows[0] ? new UsuarioModel(result.rows[0]) : undefined;
          }
        

        async save(): Promise<UsuarioModel> {
                    const result = await UsuarioModel.pool.query('INSERT INTO usuario3 (nome_usuario,cpf_usuario,datanascimento_usuario,genero_usuario,possuideficiencia_usuario,nomeresponsavel_usuario,grauparentesco_usuario,email_usuario,senha_usuario,endereco_usuario,escola_usuario,serie_usuario,turma_usuario,latitude_parada_favorita1,longitude_parada_favorita1,latitude_parada_favorita2,longitude_parada_favorita2, contatoemergencia1_usuario, contatoemergencia2_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *', 
                    [
                        this.nome_usuario,
                        this.cpf_usuario,
                        this.datanascimento_usuario,
                        this.genero_usuario,
                        this.possuideficiencia_usuario,
                        this.nomeresponsavel_usuario,
                        this.grauparentesco_usuario,
                        this.email_usuario,
                        this.senha_usuario,
                        this.endereco_usuario,
                        this.escola_usuario,
                        this.serie_usuario,
                        this.turma_usuario,
                        this.latitude_parada_favorita1,
                        this.longitude_parada_favorita1,
                        this.latitude_parada_favorita2,
                        this.longitude_parada_favorita2,
                        this.contatoemergencia1_usuario,
                        this.contatoemergencia2_usuario,
                    
                    ]
                    );
                    return new UsuarioModel(result.rows[0]);
                }

    


        async update(): Promise<void> {
          await UsuarioModel.pool.query(
              `
              UPDATE usuario3
              SET
                  nome_usuario = $1,
                  cpf_usuario = $2,
                  datanascimento_usuario = $3,
                  genero_usuario = $4,
                  possuideficiencia_usuario = $5,
                  nomeresponsavel_usuario = $6,
                  grauparentesco_usuario = $7,
                  email_usuario = $8,
                  senha_usuario = $9,
                  endereco_usuario = $10,
                  escola_usuario = $11,
                  serie_usuario = $12,
                  turma_usuario = $13,
                  latitude_parada_favorita1 = $14,
                  longitude_parada_favorita1 = $15,
                  latitude_parada_favorita2 = $16,
                  longitude_parada_favorita2 = $17,
                  contatoemergencia1_usuario = $18,
                  contatoemergencia2_usuario = $19
              WHERE id_usuario = $20
              `,
              [
                  this.nome_usuario,
                  this.cpf_usuario,
                  this.datanascimento_usuario,
                  this.genero_usuario,
                  this.possuideficiencia_usuario,
                  this.nomeresponsavel_usuario,
                  this.grauparentesco_usuario,
                  this.email_usuario,
                  this.senha_usuario,
                  this.endereco_usuario,
                  this.escola_usuario,
                  this.serie_usuario,
                  this.turma_usuario,
                  this.latitude_parada_favorita1,
                  this.longitude_parada_favorita1,
                  this.latitude_parada_favorita2,
                  this.longitude_parada_favorita2,
                  this.contatoemergencia1_usuario,
                  this.contatoemergencia2_usuario,
                  this.id_usuario,
              ]
          );
      }
      


}

UsuarioModel.initialize();

export default UsuarioModel;