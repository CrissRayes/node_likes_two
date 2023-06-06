const pool = require('./bd');

// Obtener todos los posts de la base de datos
const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts ORDER BY id")
  return rows
}

// Crear un nuevo post en la base de datos
const createPost = async (titulo, img, descripcion, likes) => {
  const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *"
  const values = [titulo, img, descripcion, likes]
  await pool.query(consulta, values)
}

// Actualizar el número de likes de un post específico
const updatePost = async (id) => {
  const consulta = "SELECT * FROM posts WHERE id = $1"
  const values = [id]
  const { rows } = await pool.query(consulta, values)
  const post = rows[0]
  post.likes++
  // console.log(post)
  const updateQuery = "UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *"
  const updateValues = [post.likes, id]
  await pool.query(updateQuery, updateValues)
  return post

  // TODO: Revisar por qué no funciona este código
  // Este código no graba en la base de datos el nuevo valor de likes
  // const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *"
  // const values = [id]
  // const { rows } = await pool.query(consulta, values)
  // console.log(rows[0])
  // return rows[0]

}

// Eliminar un post específico de la base de datos
const deletePost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *"
  const values = [id]
  await pool.query(consulta, values)
}

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost
}

