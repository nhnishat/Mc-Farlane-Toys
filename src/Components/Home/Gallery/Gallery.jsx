import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Gallery = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<div className="text-center my-5 p-5 sm:p-20">
				<h1 className="text-3xl sm:text-5xl uppercase">Gallery Sections</h1>
				<p className="font-semibold text-sm sm:text-base my-2">
					Most Beautiful Cars are Displayed Here
				</p>
			</div>
			<div className="">
				<div className="flex flex-col sm:flex-row gap-5 mb-5">
					<div data-aos="fade-up">
						<img
							src="https://i.ibb.co/tmcFYkv/wallhaven-4v827m-1920x1080.png"
							alt=""
							className="rounded-lg"
						/>
					</div>
					<div data-aos="fade-down">
						<img
							src="https://i.ibb.co/p3QLqwq/wallhaven-lmgmpq-1920x1080-1.png"
							alt=""
							className="rounded-lg"
						/>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row gap-5 mb-5">
					<div data-aos="fade-right">
						<img
							src="https://i.ibb.co/dLmcxzD/wallhaven-zxd63j-1920x1080.png"
							alt=""
							className="rounded-lg"
						/>
					</div>
					<div data-aos="fade-left">
						<img
							src="https://i.ibb.co/FxGYzwD/wallhaven-4g32v7-1920x1080.png"
							alt=""
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>

			{/* <div className="flex flex-col sm:flex-row justify-between gap-5 my-20">
				<div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://i.ibb.co/ZJMbTsb/philip-myrtorp-Z8k8-Vug5-YYg-unsplash.jpg"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Teal and Black Ford Mustang</h2>
						<p>Blue Lego Jaguar speed champions.</p>
					</div>
				</div>
				<div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://i.ibb.co/R7mkYNK/yiye-wang-PGTc-A1-Na-Grs-unsplash.jpg"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Black and Orange Toy Car</h2>
						<p>Blue Lego Jaguar speed champions.</p>
					</div>
				</div>
				<div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://i.ibb.co/tmcFYkv/wallhaven-4v827m-1920x1080.png"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Die-Cast Model</h2>
						<p>Blue Lego Jaguar speed champions.</p>
					</div>
				</div>
				<div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://i.ibb.co/FxGYzwD/wallhaven-4g32v7-1920x1080.png"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Black and White Porsche 911</h2>
						<p> Blue Lego Jaguar speed champions.</p>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Gallery;
