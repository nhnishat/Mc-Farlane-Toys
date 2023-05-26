import { Helmet } from 'react-helmet';

const Blogs = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Blogs | Mc Farlane Toys</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<div className="">
				<h1 className="text-3xl font-semibold my-20 p-3 text-center">
					Question and Answer
				</h1>
			</div>
			<div className="my-20 shadow-2xl p-4 rounded-lg">
				<h1 className="text-xl font-semibold my-3 p-3">
					Ques:- What is an access token and refresh token? How do they work and
					where should we store them on the client-side?
				</h1>
				<p className="p-3">
					An access token is a credential that is used to authenticate and
					authorize a user's access to protected resources in a system. It
					typically has a limited lifespan and is issued by an authentication
					server upon successful authentication. A refresh token is a separate
					credential that is used to obtain a new access token without requiring
					the user to reauthenticate. It has a longer lifespan compared to an
					access token. Both tokens work together in a flow where the access
					token is used to access protected resources, and the refresh token is
					used to obtain a new access token when the current one expires. On the
					client-side, access tokens should be stored securely to prevent
					unauthorized access. They are commonly stored in memory or a secure
					storage mechanism such as browser local storage or encrypted cookies.
					Refresh tokens should be stored securely as well since they have a
					longer lifespan and can be used to obtain new access tokens. It is
					recommended to store refresh tokens in a secure and encrypted manner,
					such as within a server-side session or using a secure storage
					mechanism like a secure HTTP-only cookie.
				</p>
			</div>
			<div className="my-20 shadow-2xl p-4 rounded-lg">
				<h1 className="text-2xl font-semibold my-3 p-3">
					Qus:- Compare SQL and NoSQL databases?
				</h1>

				<h1 className="text-xl font-semibold my-3 p-3">SQL databases:</h1>
				<p>
					1. Use a structured, tabular format known as tables to store data.
				</p>
				<p>
					2. Follow a rigid schema that defines the structure of the data,
					including column names and data types.
				</p>
				<p>
					3. Use SQL for defining and manipulating the data with standardized
					queries.
				</p>
				<p>
					4. Provide strong data consistency and ACID (Atomicity, Consistency,
					Isolation, Durability) properties.
				</p>
				<p>
					5. Scale vertically by increasing hardware resources (CPU, RAM) of a
					single server.
				</p>
				<h1 className="text-xl font-semibold my-3 p-3">NoSQL databases:</h1>
				<p>
					1. Offer a flexible, schema-less data model that allows storing data
					in various formats such as key-value pairs, documents, graphs, or
					wide-column stores.
				</p>
				<p>
					2. Do not require a predefined schema, allowing for dynamic and
					evolving data structures.
				</p>
				<p>
					3. Use various query languages, APIs, or object-based access for data
					retrieval and manipulation.
				</p>
				<p>
					4. Provide eventual consistency and may sacrifice some ACID properties
					for improved scalability and performance.
				</p>
				<p>
					5. Scale horizontally by distributing data across multiple servers or
					clusters.
				</p>
			</div>
			<div className="my-20 shadow-2xl p-4 rounded-lg">
				<h1 className="text-2xl font-semibold my-3 p-3">
					What is express js? What is Nest JS?
				</h1>
				<p>
					<span className="font-bold">Express:-</span>Express.js is a
					lightweight and flexible web application framework for Node.js. It
					simplifies the process of building web servers and APIs by providing a
					minimalistic and unopinionated approach. Developers can handle HTTP
					requests, define routes, and implement middleware easily.
				</p>
				<p className="my-3">
					<span className="font-bold">NestJS:-</span> NestJS is a progressive
					Node.js framework built with TypeScript. It enhances development with
					a structured and scalable environment. It leverages concepts from
					object-oriented and functional programming to organize code into
					reusable modules, promoting code maintainability and testability.
					NestJS builds on top of Express.js, incorporating its features while
					adding additional functionality and TypeScript support.
				</p>
			</div>
			<div className="my-20 shadow-2xl p-4 rounded-lg">
				<h1 className="text-2xl font-semibold my-3 p-3">
					What is MongoDB aggregate and how does it work ?
				</h1>
				<p>
					MongoDB aggregate is a powerful feature that allows for data
					aggregation operations, such as grouping, filtering, and transforming
					data within a collection. It uses a pipeline approach where multiple
					stages can be chained together to perform complex data manipulations
					and generate aggregated results.
				</p>
			</div>
		</div>
	);
};

export default Blogs;
