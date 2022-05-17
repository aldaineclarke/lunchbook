require('dotenv').config()
const express = require('express')
const server = express()
const path = require('path')
const PORT = 8080

// middlewares
server.use(express.static(path.join(__dirname, '/public')))
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

//Configuration
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, '/public/views'))

server.use('/orders', require('./src/routes/orders.route'))

server.listen(PORT, () => {
	console.log('listening on port', PORT)
})
