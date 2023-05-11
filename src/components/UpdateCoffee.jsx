import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const { _id, name, quantity, supplier, taste, details, photo, category } = coffee;

	const updateCoffee = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const details = form.details.value;
		const photo = form.photo.value;
		const category = form.category.value;
		const updatedCoffee = {
			name,
			quantity,
			supplier,
			taste,
			details,
			photo,
			category,
		};
		if (name == '') {
			return Swal.fire({
				title: 'Error!',
				text: 'Fields are empty',
				icon: 'error',
				confirmButtonText: 'Close',
			});
		}
		form.reset();
		fetch(`http://localhost:5000/coffee/${_id}`, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(updatedCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: 'Success!',
						text: 'Updated successfully',
						icon: 'success',
						confirmButtonText: 'Ok',
					});
				}
			});
	};
	return (
		<div className='bg-[#F4F3F0] p-24 mx-auto'>
			<h2 className='text-3xl font-bold'>Update Coffee</h2>
			{/*Form  name and quantity row */}
			<form onSubmit={updateCoffee}>
				<div className='md:flex mb-8'>
					<div className='form-control md:w-1/2'>
						<label className='label'>
							<span className='label-text'>Coffee Name</span>
						</label>
						<label className='input-group'>
							<input
								defaultValue={name}
								name='name'
								type='text'
								placeholder='Coffee Name'
								className='input input-bordered w-full'
							/>
						</label>
					</div>
					<div className='form-control  md:w-1/2 ml-4'>
						<label className='label'>
							<span className='label-text'>Available Quantity</span>
						</label>
						<label className='input-group'>
							<input
								defaultValue={quantity}
								name='quantity'
								type='text'
								placeholder='Available Quantity'
								className='input input-bordered w-full'
							/>
						</label>
					</div>
				</div>
				{/*Form supplier and  row */}

				<div className='md:flex mb-8'>
					<div className='form-control md:w-1/2'>
						<label className='label'>
							<span className='label-text'>Supplier Name</span>
						</label>
						<label className='input-group'>
							<input
								defaultValue={supplier}
								name='supplier'
								type='text'
								placeholder='Supplier'
								className='input input-bordered w-full'
							/>
						</label>
					</div>
					<div className='form-control  md:w-1/2 ml-4'>
						<label className='label'>
							<span className='label-text'>Taste</span>
						</label>
						<label className='input-group'>
							<input
								defaultValue={taste}
								name='taste'
								type='text'
								placeholder='Taste'
								className='input input-bordered w-full'
							/>
						</label>
					</div>
				</div>

				{/*Form category and details row */}

				<div className='md:flex mb-8'>
					<div className='form-control md:w-1/2'>
						<label className='label'>
							<span className='label-text'>Category Name</span>
						</label>
						<label className='input-group'>
							<input
								defaultValue={category}
								name='category'
								type='text'
								placeholder='Category Name'
								className='input input-bordered w-full'
							/>
						</label>
					</div>
					<div className='form-control  md:w-1/2 ml-4'>
						<label className='label'>
							<span className='label-text'>Details</span>
						</label>
						<label className='input-group'>
							<input
								defaultValue={details}
								name='details'
								type='text'
								placeholder='Details'
								className='input input-bordered w-full'
							/>
						</label>
					</div>
				</div>

				{/*Form photo url row */}

				<div className='mb-8'>
					<div className='form-control md:w-full'>
						<label className='label'>
							<span className='label-text'>Photo URL</span>
						</label>
						<label className='input-group'>
							<input
								defaultValue={photo}
								name='photo'
								type='text'
								placeholder='Photo URL'
								className='input input-bordered w-full'
							/>
						</label>
					</div>
				</div>
				<input className='btn btn-block' type='submit' value='Update Coffee' />
			</form>
		</div>
	);
};

export default UpdateCoffee;
