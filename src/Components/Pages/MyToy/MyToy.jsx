import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
import { AuthContext } from '../../Auth/AuthProvider';
import ShowMyToy from './ShowMyToy/ShowMyToy';

const MyToy = () => {
	const { currentUser } = useContext(AuthContext);

	const [myToyShow, setMyToyShow] = useState([]);

	useEffect(() => {
		fetch(`https://toy-car-server-two.vercel.app/myToy/${currentUser.email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyToyShow(data);
			});
	}, []);
	const handleDelete = (id) => {
		console.log(id);
		swal({
			title: 'Are you sure?',
			text: 'Once deleted, you will not be able to recover this imaginary file!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				fetch(`https://toy-car-server-two.vercel.app/car/${id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							swal('Poof! Your imaginary file has been deleted!', {
								icon: 'success',
							});
							const remaining = myToyShow.filter((toy) => toy._id !== id);
							setMyToyShow(remaining);
						}
					});
			} else {
				swal('Your imaginary file is safe!');
			}
		});
	};

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>MyToy | Mc Farlane Toys</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<div>
				<h1 className="text-center text-3xl my-5 p-5 font-bold">My Toy Car</h1>
			</div>
			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th>Profile</th>
							<th>Toy Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Sub-Category</th>
							<th>Update</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{myToyShow.map((toy) => (
							<ShowMyToy
								key={toy._id}
								toy={toy}
								handleDelete={handleDelete}
							></ShowMyToy>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyToy;
