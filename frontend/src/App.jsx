import { useEffect, useState } from 'react';

function App() {
	const [res, setRes] = useState(null);
	useEffect(() => {
		fetch('http://localhost:8000')
			.then((res) => res.json())
			.then((data) => setRes(data));
	}, []);
	return (
		<>
			<p>{res?.message}</p>
		</>
	);
}

export default App;
