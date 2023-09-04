const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

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
	res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
