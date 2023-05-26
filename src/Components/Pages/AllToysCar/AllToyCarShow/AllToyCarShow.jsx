import { Link } from 'react-router-dom';

const AllToyCarShow = ({ car }) => {
	// console.log(car);

	const { sellerName, name, photo, price, quantity, subCategory, _id } = car;
	return (
		<tr>
			<td>
				<div className="avatar">
					<div className="rounded w-24 h-24">
						<img src={photo} alt="Avatar Tailwind CSS Component" />
					</div>
				</div>
			</td>
			<td>{sellerName}</td>
			<td>{name}</td>
			<td>{subCategory}</td>
			<td>{price}$</td>
			<td>{quantity}</td>
			<th>
				<Link to={`/showDetails/${_id}`}>
					<button className="btn btn-primary">Show Details</button>
				</Link>
			</th>
		</tr>
	);
};

export default AllToyCarShow;
