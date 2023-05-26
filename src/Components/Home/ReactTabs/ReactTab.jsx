import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FireTruckCar from './FireTruckCar/FireTruckCar';
import PoliceCar from './PoliceCar/PoliceCar';
import SportsCar from './SportsCar/SportsCar';
const ReactTab = () => {
	const [sportsCars, setSportsCar] = useState([]);
	const [policeCars, setPoliceCar] = useState([]);
	const [fireTruckCars, setFireTruckCar] = useState([]);

	useEffect(() => {
		fetch('https://toy-car-server-two.vercel.app/sportsCar')
			.then((res) => res.json())
			.then((data) => setSportsCar(data));
	}, []);

	useEffect(() => {
		fetch('https://toy-car-server-two.vercel.app/policeCar')
			.then((res) => res.json())
			.then((data) => setPoliceCar(data));
	}, []);

	useEffect(() => {
		fetch('https://toy-car-server-two.vercel.app/miniFireTruck')
			.then((res) => res.json())
			.then((data) => setFireTruckCar(data));
	}, []);

	return (
		<div className="text-center">
			<h1 className="text-center text-3xl font-bold my-5 p-5">
				Shop by category
			</h1>
			<Tabs>
				<TabList>
					<Tab>Sports Toy car</Tab>
					<Tab>Police Toy Car</Tab>
					<Tab>Fire Truck Toy car</Tab>
				</TabList>

				<TabPanel>
					<div>
						<h2 className="my-5 p-5 text-xl font-bold">Sports Toy Car</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
						{sportsCars.slice(0, 3).map((sports) => (
							<SportsCar key={sports._id} sports={sports}></SportsCar>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div>
						<h2 className="my-5 p-5 text-xl font-bold">Police Toy Car</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
						{policeCars.slice(0, 3).map((police) => (
							<PoliceCar key={police._id} police={police}></PoliceCar>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div>
						<h2 className="my-5 p-5 text-xl font-bold">Fire Truck Toy car</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
						{fireTruckCars.slice(0, 3).map((fireTruck) => (
							<FireTruckCar
								key={fireTruck._id}
								fireTruck={fireTruck}
							></FireTruckCar>
						))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ReactTab;
