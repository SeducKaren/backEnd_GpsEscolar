import { Console } from "console";
import { Pool } from "pg";
import { PoolClient } from "pg";

interface ExtendedRequest extends Request {
    db?: PoolClient
}

class EscolaModel {
    static pool = new Pool({
        ssl: {
            rejectUnauthorized: false,
        },
        connectionString: process.env.DATABASE_URL ,
    });
    
    
    id_escola: number;
    nome_escola: string;
    latitude: number;
    longitude: number;

    constructor(data:any) {
        this.id_escola = data.id_escola || undefined;
        this.nome_escola = data.nome_escola || undefined;
        this.latitude = parseFloat(data.latitude);
        this.longitude = parseFloat(data.longitude);

    }



    static async findAll(): Promise<EscolaModel[]> {
        // const result = await this.pool.query('SELECT * FROM escola');
        const result = await this.pool.query('SELECT * FROM escola');
        return result.rows.map((data: any) => new EscolaModel(data));
        
    }
}

export default EscolaModel;