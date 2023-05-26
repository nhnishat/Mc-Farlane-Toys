import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import './UpdateToy.css';

const UpdatedToy = () => {
	const loadedCar = useLoaderData();
	const {
		_id,
		description,
		name,
		price,
		quantity,
		rating,
		sellerEmail,
		sellerName,
		subCategory,
	} = loadedCar;

	const handleUpdateSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const sellerName = form.sellerName.value;
		const sellerEmail = form.sellerEmail.value;
		const subCategory = form.subCategory.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const quantity = form.quantity.value;
		const description = form.description.value;
		const updateCar = {
			name,
			sellerName,
			sellerEmail,
			subCategory,
			price,
			rating,
			quantity,
			description,
		};
		console.log(updateCar);
		fetch(`https://toy-car-server-two.vercel.app/car/${_id}`, {
			method: 'PATCH',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(updateCar),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					swal({
						title: 'Congratulations!',
						text: 'you updated car',
						icon: 'success',
					});
				}
				console.log(data);
			});
	};
	return (
		<div className="my-20">
			<h1 className="text-center text-3xl font-bold my-5 p-5">Update A Car</h1>
			<div className="hero">
				<div>
					<h1 className="title">Add A Toy</h1>
					<form onSubmit={handleUpdateSubmit}>
						<div className="form">
							<div className="form-row">
								<label htmlFor="name">Toy Name:</label>
								<input
									type="text"
									id="name"
									placeholder="Name"
									name="name"
									defaultValue={name}
								/>
							</div>
							<div className="form-row">
								<label htmlFor="sellerName">Seller Name:</label>
								<input
									type="text"
									id="sellerName"
									placeholder="Seller Name"
									defaultValue={sellerName}
									name="sellerName"
								/>
							</div>
							<div className="form-row">
								<label htmlFor="sellerEmail">Seller Email:</label>
								<input
									type="email"
									id="sellerEmail"
									defaultValue={sellerEmail}
									placeholder="Seller Email"
									name="sellerEmail"
								/>
							</div>
							<div className="form-row">
								<label htmlFor="subCategory">Sub-category:</label>
								<input
									type="text"
									id="subCategory"
									placeholder="Sub-category"
									name="subCategory"
									defaultValue={subCategory}
								/>
							</div>
							<div className="form-row">
								<label htmlFor="price">Price:</label>
								<input
									type="text"
									id="price"
									placeholder="Price"
									name="price"
									defaultValue={price}
								/>
							</div>
							<div className="form-row">
								<label htmlFor="rating">Rating:</label>
								<input
									type="text"
									id="rating"
									placeholder="Rating"
									name="rating"
									defaultValue={rating}
								/>
							</div>
							<div className="form-row">
								<label htmlFor="quantity">Available Quantity:</label>
								<input
									type="text"
									id="quantity"
									placeholder="Available Quantity"
									name="quantity"
									defaultValue={quantity}
								/>
							</div>
							<div className="form-row w-full">
								<label htmlFor="description">Detail Description:</label>
								<textarea
									id="description"
									name="description"
									defaultValue={description}
								/>
							</div>
						</div>
						<input
							type="submit"
							value="Submit"
							className="btn btn-block my-4"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdatedToy;
