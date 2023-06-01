const pool = require( './bd' );

// traer todos los posts de la bd
const getPosts = async () => {
  const { rows } = await pool.query( "SELECT * FROM posts" )
  console.log( rows )
  return rows
}

module.exports = {
  getPosts
}

