import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import NabBar from './Components/Shared/NavBar/NabBar';

const App = () => {
	return (
		<div>
			<NabBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
