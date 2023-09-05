import { useEffect, useState } from 'react';

function App() {
	const [res, setRes] = useState(null);
	useEffect(() => {
		fetch('http://localhost:8000/items/all')
			.then((res) => res.json())
			.then((data) => setRes(data));
	}, []);
	return (
		<>
			{res?.map((item) => (
				<>
					<p>{item.id}</p>
					<h1>{item.name}</h1>
					<p>{item.description}</p>
					<p>{item.price}</p>
					<p>{item.image}</p>
					<p>{item.author}</p>
				</>
			))}
		</>
	);
}

export default App;
