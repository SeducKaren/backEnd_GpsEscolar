import pool from './index';

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Connected to the database');
    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    pool.end(); // Close all connections in the pool
  }
}

// async function testSelect() {
//     try {
//       const client = await pool.connect();
  
//       // Fazendo o SELECT na tabela 'escola'
//       const result = await client.query('SELECT * FROM escola');
  
//       console.log('Resultado do SELECT:', result.rows);
  
//       client.release(); // Release the client back to the pool
//     } catch (error) {
//       console.error('Erro ao executar o SELECT:', error);
//     } finally {
//       pool.end(); // Close all connections in the pool
//     }
//   }
  
  //testSelect();

testConnection();

