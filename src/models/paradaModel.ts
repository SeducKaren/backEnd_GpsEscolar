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

  // id_parada: string;
  // nome_parada: string;
  // latitude_parada: string;
  // longitude_parada: string;
  id_parada: string;
  nome_parada: string;
  latitude_parada: number;
  longitude_parada: number;

  // constructor(data:any){
  //     this.id_parada = data.id_parada || undefined;
  //     this.nome_parada = data.nome_parada || undefined;
  //     this.latitude_parada = data.latitude_parada || undefined;
  //     this.longitude_parada = data.longitude_parada || undefined;
  // }
  constructor(data: any) {
    this.id_parada = data.id_parada || undefined;
    this.nome_parada = data.nome_parada || undefined;
    this.latitude_parada = parseFloat(data.latitude_parada);
    this.longitude_parada = parseFloat(data.longitude_parada);
  }

  static async findAll(): Promise<ParadaModel[]> {
    const result = await this.pool.query('SELECT * FROM parada');
    return result.rows.map((data: any) => new ParadaModel(data));
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
  static async findAllRota04ida(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota04ida`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota04ida(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
          SELECT * 
          FROM rota04ida
          WHERE id_parada = $1
          `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota04volta(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota04volta`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota04volta(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
          SELECT * 
          FROM rota04volta
          WHERE id_parada = $1
          `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota05ida(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota05ida`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota05ida(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
          SELECT * 
          FROM rota05ida
          WHERE id_parada = $1
          `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota05volta(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota05volta`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota05volta(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
          SELECT * 
          FROM rota05volta
          WHERE id_parada = $1
          `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota06volta(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota06volta`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota06volta(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
          SELECT * 
          FROM rota06volta
          WHERE id_parada = $1
          `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota12(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota12`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota12(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
          SELECT * 
          FROM rota12
          WHERE id_parada = $1
          `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota17(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota17`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota17(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
          SELECT * 
          FROM rota17
          WHERE id_parada = $1
          `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota27(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota27`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota27(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
          SELECT * 
          FROM rota27
          WHERE id_parada = $1
          `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }

  static async findAllParadasTodasRotas(): Promise<ParadaModel[]> {
    try {
      const rotas = ['rota04ida', 'rota04volta', 'rota05ida', 'rota05volta', 'rota06', 'rota06volta', 'rota08', 'rota09ida', 'rota10ida', 'rota10volta', 'rota11ida', 'rota11volta', 'rota12', 'rota17', 'rota27'];
      let allParadas: ParadaModel[] = [];

      for (const rota of rotas) {
        const result = await this.pool.query(`SELECT * FROM ${rota}`);
        const paradas = result.rows.map((data: any) => new ParadaModel(data));
        allParadas = allParadas.concat(paradas);
      }

      return allParadas;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao buscar paradas de todas as rotas.");
    }
  }
  static async findAllRota09Ida(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota09`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota09Ida(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
        SELECT * 
        FROM rota09
        WHERE id_parada = $1
        `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota09Volta(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota09`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota09Volta(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
        SELECT * 
        FROM rota09
        WHERE id_parada = $1
        `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota10Ida(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota10`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota10Ida(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
        SELECT * 
        FROM rota10
        WHERE id_parada = $1
        `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota10Volta(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota10`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota10Volta(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
        SELECT * 
        FROM rota10
        WHERE id_parada = $1
        `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota11Ida(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota11`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota11Ida(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
        SELECT * 
        FROM rota11
        WHERE id_parada = $1
        `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
  static async findAllRota11Volta(): Promise<ParadaModel[]> {
    const result = await this.pool.query(`SELECT * FROM rota11`);
    return result.rows.map((data: any) => new ParadaModel(data));
  }
  static async findByIdRota11Volta(id: string): Promise<ParadaModel | undefined> {
    const result = await this.pool.query(
      `
        SELECT * 
        FROM rota11
        WHERE id_parada = $1
        `,
      [id]
    );
    return result.rows[0] ? new ParadaModel(result.rows[0]) : undefined;
  }
}
export default ParadaModel;