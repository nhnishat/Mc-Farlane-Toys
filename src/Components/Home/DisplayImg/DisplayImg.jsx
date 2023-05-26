import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
const DisplayImg = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="my-20 md:p-5">
			<h1 className="text-center text-3xl font-bold my-5 p-5">
				DisPlay Toy Car
			</h1>
			<Marquee data-aos="fade-up">
				<img
					src="https://i.ibb.co/nsbFvzz/th-147399546.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
				<img
					src="https://i.ibb.co/mBS2vk5/th-284998925.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
				<img
					src="https://i.ibb.co/tmqgfDf/th-519589965.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
				<img
					src="https://i.ibb.co/kQW4JSZ/th-698409001.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
				<img
					src="https://i.ibb.co/n1jV0WY/th-2047220848.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
				<img
					src="https://i.ibb.co/GP11zgf/th-2995120264.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
				<img
					src="https://i.ibb.co/mzycymS/th-3773262454.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
				<img
					src="https://i.ibb.co/9YD5Hh7/th-3849029198.png"
					alt=""
					data-aos="fade-up"
					className="h-44 w-full"
				/>
				<img
					src="https://i.ibb.co/CbMQJ2y/th-3899389126.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
				<img
					src="https://i.ibb.co/JyGM4T6/th-4193049870.png"
					alt=""
					className="h-44 w-full"
					data-aos="fade-up"
				/>
			</Marquee>
			<hr className="text-gray-900 mb-4 border-2" />
		</div>
	);
};

export default DisplayImg;
