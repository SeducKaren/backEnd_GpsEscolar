import { Pool } from "pg";
import { PoolClient } from "pg";

interface ExtendedRequest extends Request {
    db?: PoolClient
}

class RotasModel {
    static pool = new Pool({
        ssl: {
            rejectUnauthorized: false,
        },
        // connectionString: process.env.DATABASE_URL || "postgres://postgres:bancogps@banco-gps.cnomqqwy21eq.sa-east-1.rds.amazonaws.com/db_gps",
        connectionString: process.env.DATABASE_URL      
        // connectionString: "postgres://postgres:bancogps@banco-gps.cnomqqwy21eq.sa-east-1.rds.amazonaws.com/db_gps",
        
    });
    
    
    id_rota: number;
    numero_rota: string;
    nome_rota: string;
    link_rota: string;

    constructor(data:any) {
        this.id_rota = data.id_rota || undefined;
        this.numero_rota = data.numero_rota || undefined;
        this.nome_rota = data.nome_rota || undefined;
        this.link_rota = data.link_rota || undefined;
    }



    static async findAll(): Promise<RotasModel[]> {
        const result = await this.pool.query('SELECT * FROM rotas');
        return result.rows.map((data: any) => new RotasModel(data));
        
    }
}

export default RotasModel;