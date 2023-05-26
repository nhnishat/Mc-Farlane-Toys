import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
import { AuthContext } from '../../Auth/AuthProvider';
import './AddToy.css';

const AddToy = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser.email);
	const handleAddAToy = (event) => {
		event.preventDefault();
		const form = event.target;
		const photo = form.photo.value;
		const name = form.name.value;
		const sellerName = form.sellerName.value;
		const sellerEmail = form.sellerEmail.value;
		const subCategory = form.subCategory.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const quantity = form.quantity.value;
		const description = form.description.value;
		const addToy = {
			photo,
			name,
			sellerName,
			sellerEmail,
			subCategory,
			price,
			rating,
			quantity,
			description,
		};
		console.log(addToy);
		fetch('https://toy-car-server-two.vercel.app/allCars', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(addToy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					swal({
						title: 'congratulations!',
						text: 'You Added added a car',
						icon: 'success',
						button: 'Aww yiss!',
					});
				}
			});
	};
	return (
		<div className="my-20">
			<Helmet>
				<meta charSet="utf-8" />
				<title>AddToy | Mc Farlane Toys</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<h1 className="title">Add A Toy</h1>
			<form onSubmit={handleAddAToy}>
				<div className="form">
					<div className="form-row">
						<label htmlFor="pictureUrl">Picture URL of the toy:</label>
						<input
							type="text"
							id="pictureUrl"
							placeholder="Picture URL"
							name="photo"
						/>
					</div>
					<div className="form-row">
						<label htmlFor="name">Toy Name:</label>
						<input type="text" id="name" placeholder="Name" name="name" />
					</div>
					<div className="form-row">
						<label htmlFor="sellerName">Seller Name:</label>
						<input
							type="text"
							id="sellerName"
							placeholder="Seller Name"
							defaultValue={currentUser.displayName}
							name="sellerName"
						/>
					</div>
					<div className="form-row">
						<label htmlFor="sellerEmail">Seller Email:</label>
						<input
							type="email"
							id="sellerEmail"
							defaultValue={currentUser.email}
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
						/>
					</div>
					<div className="form-row">
						<label htmlFor="price">Price:</label>
						<input type="text" id="price" placeholder="Price" name="price" />
					</div>
					<div className="form-row">
						<label htmlFor="rating">Rating:</label>
						<input type="text" id="rating" placeholder="Rating" name="rating" />
					</div>
					<div className="form-row">
						<label htmlFor="quantity">Available Quantity:</label>
						<input
							type="text"
							id="quantity"
							placeholder="Available Quantity"
							name="quantity"
						/>
					</div>
					<div className="form-row w-full">
						<label htmlFor="description">Detail Description:</label>
						<textarea id="description" name="description" />
					</div>
				</div>
				<input type="submit" value="Submit" className="btn btn-block my-4" />
			</form>
		</div>
	);
};

export default AddToy;
