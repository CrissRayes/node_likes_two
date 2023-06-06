const pool = require('./bd');

// traer todos los posts de la bd
const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts ORDER BY id")
  return rows
}

// crear un nuevo post
const createPost = async (titulo, img, descripcion, likes) => {
  const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *"
  const values = [titulo, img, descripcion, likes]
  await pool.query(consulta, values)
}

// actualizar un post
const updatePost = async (id) => {

  // el RETURNING * es para devolver todas las columnas de la tabla
  const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *"
  // parametrizar
  const values = [id]
  // ejecutar la consulta
  const { rows } = await pool.query(consulta, values)
  // mostrar el post actualizado
  console.log(rows[0])
  // retornar el post actualizado
  return rows[0]

  // podria hacer lo mismo con el siguiente codigo:
  // primero traer el post de la bd
  // const consulta = "SELECT * FROM posts WHERE id = $1"
  // const values = [id] // el id lo recibo por params
  // const { rows } = await pool.query(consulta, values)
  // const post = rows[0]
  // // luego actualizar los likes
  // post.likes++
  // // console.log(post)
  // // luego actualizar el post en la bd y retornarlo
  // const updateQuery = "UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *"
  // const updateValues = [post.likes, id]
  // await pool.query(updateQuery, updateValues)
  // return post

}

// eliminar un post
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

