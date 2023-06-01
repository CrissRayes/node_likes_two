require( 'dotenv' ).config()
const express = require( 'express' )
const app = express()
const cors = require( 'cors' )
const { getPosts, createPost, updatePost, deletePost } = require( './queries' )

const port = process.env.PORT || 3001
app.listen( port, console.log( `Server running on http://localhost:${ port }` ) )

// Middlewares
app.use( cors() )
app.use( express.json() )


// GET
app.get( '/posts', async ( req, res ) => {
  try {
    const posts = await getPosts()
    res.status( 200 ).json( posts )
  } catch ( error ) {
    res.status( 500 ).json( { error: error.message } )
  }
} )

// POST
app.post( '/posts', async ( req, res ) => {
  try {
    const { titulo, img, descripcion } = req.body
    await createPost( { titulo, img, descripcion } )
    res.status( 200 ).json( { message: 'Post creado' } )
  } catch ( error ) {
    res.status( 500 ).json( { error: error.message } )
  }
} )

// PUT
app.put( '/posts/like/:id', async ( req, res ) => {
  const { id } = req.params
  const { likes } = req.body
  await updatePost( id, { likes } )
  res.status( 200 ).json( { message: 'Post actualizado' } )
} )
