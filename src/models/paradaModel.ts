import { Pool } from "pg";
import { PoolClient } from "pg";

interface ExtendedRequest extends Request {
    db?: PoolClient
}

class ParadaModel {
    static pool = new Pool({
        ssl: {
            rejectUnauthorized: false,
        },
        connectionString: process.env.DATABASE_URL
    });

    id_parada: string;
    nome_parada: string;
    latitude_parada: string;
    longitude_parada: string;

    constructor(data:any){
        this.id_parada = data.id_parada || undefined;
        this.nome_parada = data.nome_parada || undefined;
        this.latitude_parada = data.latitude_parada || undefined;
        this.longitude_parada = data.longitude_parada || undefined;
    }

    static async findAll(): Promise<ParadaModel[]> {
        const result = await this.pool.query('SELECT * FROM parada');
        return result.rows.map((data:any) => new ParadaModel(data));
    }

    // static async findById(id:string): Promise<ParadaModel | undefined> {
    //     const result = await this.pool.query('Select * from parada Where id_parada = $1', [id]);
    //     return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
    // }
    static async findById(id: string): Promise<ParadaModel | undefined> {
        const result = await this.pool.query(
          `
          SELECT *
          FROM parada
          WHERE id_parada = $1
        `,
          [id]
        );
        return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
      }

      static async findAllRota06(): Promise<ParadaModel[]> {
        const result = await this.pool.query(`SELECT * FROM rota06`);
        return result.rows.map((data: any) => new ParadaModel(data));
      }
    static async findByIdRota06(id: string): Promise<ParadaModel | undefined> {
        const result = await this.pool.query(
          `
          SELECT *
          FROM rota06
          WHERE id_parada = $1
        `,
          [id]
        );
        return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
      }

      static async findAllRota08(): Promise<ParadaModel[]> {
        const result = await this.pool.query(`SELECT * FROM rota08`);
        return result.rows.map((data: any) => new ParadaModel(data));
      }
      static async findByIdRota08(id: string): Promise<ParadaModel | undefined> {
        const result = await this.pool.query(
          `
          SELECT * 
          FROM rota08
          WHERE id_parada = $1
          `,
          [id]
        );
        return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
    }
  }
export default ParadaModel;