const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middleware
app.use(cors()); // fixed CORS origin error
app.use(bodyParser.json());

// Import Routes
const postsRoutes = require('./routes/posts');

app.use('/api/posts', postsRoutes);

// ROUTES
app.get('/', (req, res, next) => {
	res.send('Node-Rest-API By Najathi');
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('DB CONNECTED');
});

// How to we start listening to the server
app.listen(4400);