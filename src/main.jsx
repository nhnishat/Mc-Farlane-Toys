import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Components/Auth/AuthProvider.jsx';
import Router from './Components/Routers/Router.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className="container mx-auto">
			<AuthProvider>
				<RouterProvider router={Router}></RouterProvider>
			</AuthProvider>
		</div>
	</React.StrictMode>
);
