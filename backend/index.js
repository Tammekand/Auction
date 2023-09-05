const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const port = 8000;

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
app.use(express.json());

app.get('/items/all', (req, res) => {
	res.json([
		{
			id: 1,
			name: 'Tool',
			description: 'Punane tool',
			price: 10,
			image: 'https://i.imgur.com/LExRjzC.jpeg',
			author: 'Karl',
		},
		{
			id: 2,
			name: 'Laud',
			description: 'Punane laud',
			price: 20,
			image: 'https://i.imgur.com/z2Nqr1N.jpeg',
			author: 'Karl',
		},
		{
			id: 3,
			name: 'Kapp',
			description: 'Sinine kapp',
			price: 30,
			image: 'https://i.imgur.com/uNg0diQ.jpeg',
			author: 'Axel',
		},
	]);
});

app.post('/items/add', (req, res) => {
	db.query(
		`INSERT INTO items (name, description, price, image, author) VALUES ('${req.body.name}', '${req.body.description}', '${req.body.price}', '${req.body.image}', '${req.body.author}')`,
		(err, result) => {
			if (err) {
				res.json({ error: err });
			} else {
				res.json({ success: result });
			}
		}
	);
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
