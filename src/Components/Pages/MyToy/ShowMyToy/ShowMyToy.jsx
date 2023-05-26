import { Link } from 'react-router-dom';

const ShowMyToy = ({ toy, handleDelete }) => {
	// console.log(toy);
	const { name, photo, price, quantity, subCategory, _id } = toy;
	return (
		<tr>
			<td>
				<div className="avatar">
					<div className="rounded w-24 h-24">
						<img src={photo} alt="Avatar Tailwind CSS Component" />
					</div>
				</div>
			</td>
			<td>{name}</td>
			<td>{price}$</td>
			<td>{quantity}</td>
			<td>{subCategory}</td>
			<th>
				<Link to={`/update/${_id}`}>
					<button className="btn btn-outline btn-primary">Edit</button>
				</Link>
			</th>
			<th>
				<button
					onClick={() => handleDelete(_id)}
					className="btn btn-outline btn-primary"
				>
					Delete
				</button>
			</th>
		</tr>
	);
};

export default ShowMyToy;
