import { useEffect, useState } from 'react';
import Item from './components/Item';

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
				<div className="flex">
					<Item
						name={item.name}
						desc={item.description}
						price={item.price}
						image={item.image}
						author={item.author}
					/>
				</div>
			))}
		</>
	);
}

export default App;
