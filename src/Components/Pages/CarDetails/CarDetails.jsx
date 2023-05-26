import { Helmet } from 'react-helmet';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
	const loadedData = useLoaderData();
	// console.log(loadedData);
	const {
		description,
		name,
		photo,
		price,
		quantity,
		rating,
		sellerEmail,
		sellerName,
		subCategory,
	} = loadedData;
	return (
		<div className="mb-20">
			<Helmet>
				<meta charSet="utf-8" />
				<title>ToyDetails | Mc Farlane Toys</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<h2 className="my-5 p-5 text-4xl font-bold text-center">Toy Details</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mx-10 ms-20">
				<div className="shadow-lg w-full rounded-lg">
					<LazyLoadImage src={photo} />
				</div>
				<div className="shadow-lg w-full lg:py-20 lg:px-4 rounded-lg">
					<h2 className="text-2xl font-semibold my-2">Toy Name: {name}</h2>
					<h2 className="text-2xl my-2">Seller Name: {sellerName}</h2>

					<p className="font-semibold mt-4">Seller Email: {sellerEmail}</p>
					<p className="font-semibold my-2">Price: {price}</p>
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
					<p className="font-semibold my-2">Quantity: {quantity}</p>
					<p className="font-semibold my-2">SubCategory: {subCategory}</p>
					<p className="font-semibold my-2">Description: {description}</p>
				</div>
			</div>
		</div>
	);
};

export default CarDetails;
