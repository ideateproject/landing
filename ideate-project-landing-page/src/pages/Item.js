import React from 'react';
import { Paper, Button } from '@material-ui/core';

function Item(props) {
	return (
		<Paper>
			<h2>{props.item.name}</h2>
			<p>{props.item.Description}</p>

			<Button className="CheckButton">Check it out!!</Button>
		</Paper>
	);
}

export default Item;