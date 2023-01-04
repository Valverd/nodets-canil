import express from 'express'
import dotenv from 'dotenv'
import mainRoutes from './routes/index'
dotenv.config()
const server = express()

server.use(mainRoutes)

server.use((req, res) => {
    res.send('Página não encontrada')
})

server.listen(process.env.PORT, () => {
    console.log('server running')
})