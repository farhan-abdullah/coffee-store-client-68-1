import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
	const { _id, name, quantity, supplier, taste, details, photo, category } = coffee;

	const handleDelete = (_id) => {
		console.log(_id);
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				console.log('delete conferm');
				fetch(`http://localhost:5000/coffee/${_id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire('Deleted!', 'Your coffee item has been deleted.', 'success');
							const remaining = coffees.filter((cof) => cof._id !== _id);
							setCoffees(remaining);
						}
					});
			}
		});
	};

	return (
		<div className='card card-side bg-base-100 shadow-xl p-2'>
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
						<Link to={`/updatecoffee/${_id}`}>
							<button className='btn'>Update</button>
						</Link>
						<button
							onClick={() => handleDelete(_id)}
							className='btn bg-orange-600 border-none'>
							X
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
