import { useState } from 'react';
import './App.css';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';

function App() {
	const loadedCoffees = useLoaderData();
	const [coffees, setCoffees] = useState(loadedCoffees);
	return (
		<>
			<h1 className='text-center font-bold text-3xl my-20'>Hot Cold Coffee</h1>
			<div className='mx-auto grid md:grid-cols-2 gap-8 p-24 m-5'>
				{coffees.map((coffee) => (
					<CoffeeCard
						key={coffee._id}
						coffees={coffees}
						coffee={coffee}
						setCoffees={setCoffees}></CoffeeCard>
				))}
			</div>
		</>
	);
}

export default App;
