import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import HomeLayout from '../Home/Home/HomeLayout';
import AddToy from '../Pages/AddAToy/AddToy';
import AllToysCar from '../Pages/AllToysCar/AllToysCar';
import Blogs from '../Pages/Blogs/Blogs';
import CarDetails from '../Pages/CarDetails/CarDetails';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Log/Login';
import MyToy from '../Pages/MyToy/MyToy';
import Register from '../Pages/Register/Register';
import UpdatedToy from '../Pages/Update/UpdatedToy';
import PrivateRoute from './Private/PrivateRoute';

const Router = createBrowserRouter([
	{
		path: '/',
		errorElement: <Error />,
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomeLayout />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'myToy',
				element: (
					<PrivateRoute>
						<MyToy />
					</PrivateRoute>
				),
			},
			{
				path: 'addAToy',
				element: (
					<PrivateRoute>
						<AddToy />
					</PrivateRoute>
				),
			},
			{
				path: 'allToy',
				element: <AllToysCar />,
			},
			{
				path: 'showDetails/:id',
				element: (
					<PrivateRoute>
						<CarDetails />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://toy-car-server-two.vercel.app/car/${params.id}`),
			},
			{
				path: 'update/:id',
				element: (
					<PrivateRoute>
						<UpdatedToy />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://toy-car-server-two.vercel.app/car/${params.id}`),
			},
			{
				path: 'blogs',
				element: <Blogs />,
			},
		],
	},
]);

export default Router;
