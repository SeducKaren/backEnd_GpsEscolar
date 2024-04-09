// import { Pool } from "pg";
// import { PoolClient } from "pg";

// interface ExtendedRequest extends Request {
//     db?: PoolClient
// }

// class UsuarioModel {
//     static pool = new Pool({
//         ssl: {
//             rejectUnauthorized: false,
//         },
//         // connectionString: process.env.DATABASE_URL || "postgres://postgres:bancogps@banco-gps.cnomqqwy21eq.sa-east-1.rds.amazonaws.com/db_gps",
//         connectionString: process.env.DATABASE_URL      
//         // connectionString: "postgres://postgres:bancogps@banco-gps.cnomqqwy21eq.sa-east-1.rds.amazonaws.com/db_gps",
        
//     });
    
    
//     id_usuario: number;
//     matricula_usuario: number;
//     nome_usuario: string;
//     cpf_usuario: number;
//     email_usuario: string;
//     telefone_usuario: string;
//     dataNasc_usuario: number;
//     genero_usuario: string;
//     possuiDeficiencia_usuario: string;
//     deficiencia_usuario: string;
//     nomeResp_usuario: string;
//     grauPar_usuario: string;
//     turma_usuario: string;
//     serie_usuario: string;
//     escola_usuario: string;
//     uf_usuario: string;
//     cep_usuario: string;
//     cidade_usuario: string;
//     bairro_usuario: string;
//     rua_usuario: string;
//     numero_usuario: number;
//     complemento_usuario: string;
    

//     constructor(data:any) {
//         this.id_usuario = data.id_usuario || undefined;
//         this.matricula_usuario = data.matricula_usuario || undefined;
//         this.nome_usuario = data.nome_usuario || undefined;
//         this.cpf_usuario = data.cpf_usuario || undefined;
//         this.email_usuario = data.email_usuario || undefined;
//         this.telefone_usuario = data.telefone_usuario || undefined;
//         this.dataNasc_usuario = data.dataNasc_usuario || undefined;
//         this.genero_usuario = data.genero_usuario || undefined;
//         this.possuiDeficiencia_usuario = data.possuiDeficiencia_usuario || undefined;
//         this.deficiencia_usuario = data.deficiencia_usuario || undefined;
//         this.nomeResp_usuario = data.nomeResp_usuario || undefined;
//         this.grauPar_usuario = data.grauPar_usuario || undefined;
//         this.turma_usuario = data.turma_usuario || undefined;
//         this.serie_usuario = data.serie_usuario || undefined;
//         this.escola_usuario = data.escola_usuario || undefined;
//         this.uf_usuario = data.uf_usuario || undefined;
//         this.cep_usuario = data.cep_usuario || undefined;
//         this.cidade_usuario = data.cidade_usuario || undefined;
//         this.bairro_usuario = data.bairro_usuario || undefined;
//         this.rua_usuario = data.rua_usuario || undefined;
//         this.numero_usuario = data.numero_usuario || undefined;
//         this.complemento_usuario = data.complemento_usuario || undefined;

//     }



//     // static async findAll(): Promise<UsuarioModel[]> {
//     //     const result = await this.pool.query('SELECT * FROM usuarios');
//     //     return result.rows.map((data: any) => new UsuarioModel(data));
        
//     // }
//     static async getAll(): Promise<UsuarioModel[]> {
//         const result = await this.pool.query('SELECT * FROM usuario');
//         return result.rows.map((data: any) => new UsuarioModel(data));
        
//     }

//     async save(): Promise<UsuarioModel> {
//         const result = await UsuarioModel.pool.query('INSERT INTO usuario (matricula_usuario,nome_usuario,cpf_usuario,email_usuario,telefone_usuario,dataNasc_usuario,genero_usuario,possuiDeficiencia_usuario,deficiencia_usuario,nomeResp_usuario,grauPar_usuario,turma_usuario,serie_usuario,escola_usuario,uf_usuario,cep_usuario,cidade_usuario,bairro_usuario,rua_usuario,numero_usuario,complemento_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *', 
//         // [
//         //     matricula_usuario, 
//         //     nome_usuario, 
//         //     cpf_usuario, 
//         //     email_usuario, 
//         //     telefone_usuario, 
//         //     dataNasc_usuario, 
//         //     genero_usuario, 
//         //     possuiDeficiencia_usuario, 
//         //     deficiencia_usuario, 
//         //     nomeResp_usuario, 
//         //     grauPar_usuario, 
//         //     turma_usuario, 
//         //     serie_usuario, 
//         //     escola_usuario, 
//         //     uf_usuario, 
//         //     cep_usuario, 
//         //     cidade_usuario, 
//         //     bairro_usuario, 
//         //     rua_usuario, 
//         //     numero_usuario, 
//         //     complemento_usuario,
//         // ]
//         );
//         return new UsuarioModel(result.rows[0]);
//     }
    
    
// }

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

        // id_usuario: number;
        // matricula_usuario: number;
        // nome_usuario: string;
        // cpf_usuario: number;
        // email_usuario: string;
        // telefone_usuario: string;
        // datanascimento_usuario: number;
        // genero_usuario: string;
        // possuideficiencia_usuario: string;
        // deficiencia_usuario: string;
        // nomeresp_usuario: string;
        // graupar_usuario: string;
        // turma_usuario: string;
        // serie_usuario: string;
        // escola_usuario: string;
        // uf_usuario: string;
        // cep_usuario: string;
        // cidade_usuario: string;
        // bairro_usuario: string;
        // rua_usuario: string;
        // numero_usuario: number;
        // complemento_usuario: string;
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
        }

        
        static async getAll(): Promise<UsuarioModel[]> {
                    const result = await this.pool.query('SELECT * FROM usuario');
                    return result.rows.map((data: any) => new UsuarioModel(data));
                    
        }

        static async findById(id: string): Promise<UsuarioModel | undefined> {
            const result = await this.pool.query(
              `
              SELECT *
              FROM usuario
              WHERE id_usuario = $1
            `,
              [id]
            );
            return result.rows[0] ? new UsuarioModel(result.rows[0]) : undefined;
          }
        

        async save(): Promise<UsuarioModel> {
                    const result = await UsuarioModel.pool.query('INSERT INTO usuario (nome_usuario,cpf_usuario,datanascimento_usuario,genero_usuario,possuideficiencia_usuario,nomeresponsavel_usuario,grauparentesco_usuario,email_usuario,senha_usuario,endereco_usuario,escola_usuario,serie_usuario,turma_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *', 
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
                    
                    ]
                    );
                    return new UsuarioModel(result.rows[0]);
                }

    
        // async update(): Promise<void> {
        //             await UsuarioModel.pool.query(
        //               `
        //               UPDATE usuario
        //               SET
        //                 (nome_usuario = $1,
        //                 cpf_usuario = $2,
        //                 datanascimento_usuario = $3,
        //                 genero_usuario = $4,
        //                 possuideficiencia_usuario = $5,
        //                 nomeresponsavel_usuario = $6,
        //                 grauparentesco_usuario = $7,
        //                 email_usuario = $8,
        //                 senha_usuario = $9,
        //                 endereco_usuario = $10,
        //                 escola_usuario = $11,
        //                 serie_usuario = $12,
        //                 turma_usuario = $13)
        //               WHERE id_usuario = $14
        //             `,
        //               [
        //                 this.nome_usuario,
        //                 this.cpf_usuario,
        //                 this.datanascimento_usuario,
        //                 this.genero_usuario,
        //                 this.possuideficiencia_usuario,
        //                 this.nomeresponsavel_usuario,
        //                 this.grauparentesco_usuario,
        //                 this.email_usuario,
        //                 this.senha_usuario,
        //                 this.endereco_usuario,
        //                 this.escola_usuario,
        //                 this.serie_usuario,
        //                 this.turma_usuario,
        //                 this.id_usuario,
        //               ]
        //             );
        //         }

        async update(): Promise<void> {
          await UsuarioModel.pool.query(
              `
              UPDATE usuario
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
                  turma_usuario = $13
              WHERE id_usuario = $14
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
                  this.id_usuario,
              ]
          );
      }
      


}

UsuarioModel.initialize();

export default UsuarioModel;