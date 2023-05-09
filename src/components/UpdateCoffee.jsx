import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
	const data = useLoaderData();
	return (
		<div>
			<h1>{data.name}</h1>
		</div>
	);
};

export default UpdateCoffee;
