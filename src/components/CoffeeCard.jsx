import React from 'react';

const CoffeeCard = ({ coffee }) => {
	const { name, quantity, supplier, taste, details, photo, category } = coffee;
	return (
		<div className='card   card-side bg-base-100 shadow-xl'>
			<figure>
				<img src={photo} alt='Movie' />
			</figure>
			<div className=' flex justify-between w-full pr-4 '>
				<div>
					<h2 className='card-title'>{name}</h2>
					<p>{quantity}</p>
					<p>{supplier}</p>
					<p>{taste}</p>
				</div>
				<div className='card-actions justify-end '>
					<div className='flex flex-col gap-5'>
						<button className='btn'>View</button>
						<button className='btn'>Update</button>
						<button className='btn bg-orange-600 border-none'>X</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
