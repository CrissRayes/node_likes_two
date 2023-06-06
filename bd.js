require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'likeme',
  allowExitOnIdle: true,
})

module.exports = pool

//// TEST CONNECTION //////
// Descomentar para probar la conexión a la base de datos 
//
// Prueba de conexión a la base de datos
// const testConnection = async () => {
//   const consulta = "SELECT NOW()"
//   const result = await pool.query( consulta )
//   result
//     ? console.log( 'Conexion exitosa' )
//     : console.log( 'Conexion fallida' )
// }
// testConnection()
//
// Prueba de consulta para saber a que base de datos se conectó
// const testBase = async () => {
//   const consulta = "SELECT current_database()"
//   const result = await pool.query( consulta )
//   console.log( result.rows )
// }
// testBase()
// 