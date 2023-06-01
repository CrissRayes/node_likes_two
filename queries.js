const pool = require( './bd' );

// traer todos los posts de la bd
const getPosts = async () => {
  const { rows } = await pool.query( "SELECT * FROM posts" )
  return rows
}

// crear un nuevo post
const createPost = async ( payload ) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)"
  const { titulo, img, descripcion } = payload
  const values = [ titulo, img, descripcion ]
  const result = await pool.query( consulta, values )
}


// actualizar un post
const updatePost = async ( id, post ) => {
  //
}


// eliminar un post
const deletePost = async ( id ) => {
  //
}


module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost
}

