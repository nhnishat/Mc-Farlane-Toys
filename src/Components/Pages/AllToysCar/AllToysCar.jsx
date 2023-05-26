import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AllToyCarShow from './AllToyCarShow/AllToyCarShow';

const AllToysCar = () => {
	const [allCars, setAllCars] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [searchText, setSearchText] = useState();

	useEffect(() => {
		fetch(`https://toy-car-server-two.vercel.app/car?page=${currentPage}`)
			.then((res) => res.json())
			.then((data) => {
				setAllCars(data.data);
				setTotalPages(data.totalPages);
			});
	}, [currentPage]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	const handleSearch = () => {
		fetch(`https://toy-car-server-two.vercel.app/searchCar/${searchText}`)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setAllCars(data);
			});
	};

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>AllToy | Mc Farlane Toys</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<h1 className="text-center text-3xl my-20 p-5 underline">
				All Cars Here
			</h1>

			<div className="flex my-20 p-5 justify-between">
				<div className="form-control text-center block">
					<div className="input-group">
						<input
							type="text"
							placeholder="Search…"
							className="input input-bordered"
							name="search"
							onChange={() => setSearchText(event.target.value)}
						/>
						<button onClick={handleSearch} className="btn btn-square">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="btn-group grid grid-cols-2">
					<button className="btn btn-outline">Low Price</button>
					<button className="btn btn-outline">High Price</button>
				</div>
			</div>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th>Profile</th>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Sub_category</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{allCars.map((car) => (
							<AllToyCarShow car={car} key={car._id}></AllToyCarShow>
						))}
					</tbody>
				</table>
			</div>
			{/* pagination */}
			<div className="btn-group text-center block my-5">
				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(page) => (
						<button
							key={page}
							className={`btn ${page === currentPage ? 'btn-active' : ''}`}
							onClick={() => handlePageChange(page)}
						>
							{page}
						</button>
					)
				)}
			</div>
		</div>
	);
};

export default AllToysCar;
