import { FaRegStar, FaStar } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const PoliceCar = ({ police }) => {
	console.log(police);
	const { photo, name, price, rating, _id } = police;
	return (
		<div className="card card-compact w-96 bg-base-100 shadow-xl">
			<figure>
				<LazyLoadImage src={photo} className="w-52 h-52" />
			</figure>
			<div className="card-body">
				<h2 className="card-title"> Toy Name: {name}</h2>
				<p className="text-start font-semibold">Price: ${price}</p>
				{/* <p className="text-start font-semibold">Rating: {rating}</p> */}
				<p className="text-start font-semibold">
					<span className="rating-label me-3">Rating:</span>
					<Rating
						placeholderRating={rating}
						value={Math.round(rating || 0)}
						emptySymbol={<FaRegStar></FaRegStar>}
						readonly
						placeholderSymbol={<FaStar className="text-warning"></FaStar>}
						fullSymbol={<FaStar></FaStar>}
					></Rating>
					<span className="text-sm m-2">({rating})</span>
				</p>
				<div className="card-actions justify-end">
					<Link to={`/showDetails/${_id}`}>
						<button className="btn btn-primary">Show Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PoliceCar;
