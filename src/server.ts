import express, { NextFunction, Request, Response } from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import escolaRoutes from './routes/escolaRoutes';
import bodyParser from 'body-parser';

import dotenv from "dotenv";
import { PoolClient } from 'pg';
import pool from './database';
import indexRouter from './routes/indexRoutes';
import { log } from 'console';

dotenv.config();

const app = express();

interface ExtendedRequest extends Request {
    db?: PoolClient
}





app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use(async (req: ExtendedRequest, res: Response, next: NextFunction)  => {
    console.log('Chamando o banco de dados');
    try {
        const client: PoolClient = await pool.connect();
        req.db = client;
        console.log(' Conexão com o banco de dados ok');
        next();
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados", error);
        res.status(500).json({error: "Erro interno no servidor"});
        
    }
});

app.use((req: ExtendedRequest, res: Response, next: NextFunction) => {
    const db = req.db;
    if (db) {
      db.release();
    }
    next();
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res
      .status(500)
      .send("*** Erro Interno no Servidor! Por favor Verifique seu Servidor ***");
  });


  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitações de todas as origens (mude '*' para sua origem específica em produção)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permitir o cabeçalho Content-Type
    if (req.method === 'OPTIONS') {
      res.sendStatus(200); // Responder imediatamente às requisições OPTIONS
    } else {
      next(); // Passar a requisição para o próximo middleware
    }
  });

// testando uma rota GET em escolas do banco de dados
//  app.get('/escolas', async (req: ExtendedRequest, res: Response) => {
//      try {
//          const result = await pool.query('SELECT * FROM escola');
//          res.status(200).json(result.rows);
//     } catch (error) {
//          console.error("Erro ao buscar escolas", error);
//          res.status(500).json({ error: "Erro interno no servidor" });
//    }
//  });
// testando uma rota GET em escolas do banco de dados
// app.get('/usuario', async (req: ExtendedRequest, res: Response) => {
//     try {
//         const result = await pool.query('SELECT * FROM usuario');
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.error("Erro ao buscar escolas", error);
//         res.status(500).json({ error: "Erro interno no servidor" });
//     }
// });

// rotas
app.use("/api", indexRouter);
// app.use('/users', usuarioRoutes);

// app.use('/escola', escolaRoutes);

const PORT = process.env.DB_PORT;
app.listen(PORT, () => {
    console.log('Server rodando na porta ${PORT}');
    console.log('Server acessível em http://localhost:${PORT}');
    
});