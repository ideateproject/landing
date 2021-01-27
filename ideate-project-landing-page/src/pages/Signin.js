import './Signin.css';
import React from 'react';
import Item from './Item.js';
import Carousel from 'react-material-ui-carousel';

function Signin() {
	var items = [
		{
			name: 'Deep',
			Description: 'student',
		},
		{
			name: 'Prem',
			Description: 'BBA',
		},
		{
			name: 'Manish',
			Description: 'GETCO',
		},
	];
	return (
		<div className="signin">
			<Carousel
				className="signin__Carousel"
				autoPlay={false}
				animation="slide"
			>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
		</div>
	);
}

export default Signin;
