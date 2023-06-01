require( 'dotenv' ).config()
const express = require( 'express' )
const app = express()
const cors = require( 'cors' )
const { getPosts } = require( './queries' )

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