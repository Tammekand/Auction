const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'auction',
	password: 'password',
	database: 'auction',
});

db.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Connected to MySQL');
	}
});

const corsOptions = {
	origin: 'http://localhost:5173', // Replace with your frontend URL
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true, // enable cookies and sessions
	optionsSuccessStatus: 204, // no content response for preflight requests
	allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
	console.log('Request made');
	db.query('show tables', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			res.send(result);
		}
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
