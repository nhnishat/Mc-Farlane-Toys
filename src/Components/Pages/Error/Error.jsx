import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
	const { error, status } = useRouteError();
	return (
		<div className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="container flex flex-col items-center justify-center mx-auto my-5">
				<div className="text-center">
					<img
						src="https://i.ibb.co/x2yQRLG/7866-removebg-preview.png"
						alt=""
					/>
				</div>
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl text-gray-600">
						<span className="sr-only">Error</span> {status || 404}
					</h2>
					<p className="text-2xl font-semibold mb-8">{error?.message}</p>
					<Link
						to="/"
						className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
					>
						Back to homepage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Error;
