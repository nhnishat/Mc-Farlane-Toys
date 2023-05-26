import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AosPage = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="my-20">
			<h1 className="font-bold text-5xl text-center my-5">
				Latest Car and Review
			</h1>
			<div className="lg:flex md:mx-20 md:p-20 p-3">
				<div className="lg:w-1/2" data-aos="fade-up">
					<img src="https://i.ibb.co/tmqgfDf/th-519589965.png" alt="" />
				</div>
				<div className="lg:w-1/2 lg:pl-16" data-aos="fade-up">
					<h1 className="text-4xl lg:text-5xl font-bold leading-snug text-amber-500 uppercase">
						The latest new car <br />
						<span className="text-primary font-bold leading-snug uppercase">
							<span className="text-black uppercase">And</span> <br /> expert
							reviews
						</span>
					</h1>
					<p className="text-sm lg:text-base text-slate-500 font-semibold my-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
						adipisci odit sed.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AosPage;
