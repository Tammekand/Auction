import React from 'react';

function Item(props) {
	return (
		<div className="">
			<h1>{props.name}</h1>
			<p>Description: {props.description}</p>
			<p>Price: {props.price}</p>
			<img src={props.image} alt={props.name} />
			<p>Author: {props.author}</p>
		</div>
	);
}
export default Item;
