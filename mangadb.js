const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5500;
const path = require('path');

// Configurando EJS como motor de plantillas
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio', message: 'Bienvenido a NuevaEditorial' });
});

// Crear un pool de conexiones
const pool = mysql.createPool({
  host: '127.0.0.3',
  port: '3306',
  user: 'root',
  password: 'rootpassword',
  database: 'mangadb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/api/volumenes-populares', (req, res) => {
  console.log("Accediendo a /api/volumenes-populares");
  const sqlQuery = `
      SELECT V.volumen_id, V.numero_volumen, V.stock, V.precio, V.fecha_publicacion, V.imagen_url, C.titulo AS titulo_coleccion, SUM(D.cantidad) AS total_vendido
      FROM Volumenes V
      JOIN DetallesPedidos D ON V.volumen_id = D.volumen_id
      JOIN Colecciones C ON V.coleccion_id = C.coleccion_id
      GROUP BY V.volumen_id, V.numero_volumen, V.stock, V.precio, V.fecha_publicacion, V.imagen_url, C.titulo
      ORDER BY total_vendido DESC
      LIMIT 8;
  `;
  pool.query(sqlQuery, function(err, results) {
      console.log(results);
      if (err) {
          console.error('Error al ejecutar la consulta:', err);
          res.status(500).json({ error: 'Error al procesar la consulta' });
          return;
      }
      res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://127.0.0.3:${port}`);
});


