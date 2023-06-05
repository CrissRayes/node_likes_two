const pool = require('./bd');

// traer todos los posts de la bd
const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts")
  return rows
}

// crear un nuevo post
const createPost = async (post) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)"
  const { titulo, img, descripcion } = post
  const values = [titulo, img, descripcion]
  await pool.query(consulta, values)
}

// actualizar un post
const updatePost = async (likes, id) => {
  const consulta = "UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *"
  const values = [likes, id]
  const result = await pool.query(consulta, values)

  if (result.rowCount === 0) return null

  return result.rows[0]

}

// eliminar un post
const deletePost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *"
  const values = [id]
  const result = await pool.query(consulta, values)

  if (result.rowCount === 0) return null

  return result.rows[0]
}

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost
}

