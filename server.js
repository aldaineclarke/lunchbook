require('dotenv').config();
const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const server = express();
const path = require('path');
const PORT = 8080;
const indexRouter = require('./src/routes/index.route');

// middlewares
server.use(express.static(path.join(__dirname, '/public')))
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(session({
	secret: process.env.SECRET_KEY,
	saveUninitialized: false,
	resave:false,
	cookie:{
		maxAge:120000
	}
}));
server.use(flash());



//Configuration
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, '/public/views'))


// Routers
server.use("/", indexRouter)
server.use('/orders', require('./src/routes/orders.route'))

server.listen(PORT, () => {
	console.log('listening on port', PORT)
})
