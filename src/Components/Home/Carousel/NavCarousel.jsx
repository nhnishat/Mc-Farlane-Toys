const NavCarousel = () => {
	return (
		<div className="carousel w-full my-5 sm:w-full">
			<div id="slide1" className="carousel-item relative w-full rounded-xl">
				<img
					src="https://i.ibb.co/kKn1KtV/haseeb-modi-Da-F4-Fo-Y0a-KA-unsplash.jpg"
					className="w-full rounded-xl"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full ">
				<img
					src="https://i.ibb.co/PwFDpCW/haseeb-modi-AU3o-Ye-Ek-W7k-unsplash.jpg"
					className="w-full rounded-xl"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full rounded-xl">
				<img
					src="https://i.ibb.co/swXX8hK/gimmel-magaway-0-Swcp-A3-A-IE-unsplash.jpg"
					className="w-full rounded-xl"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full rounded-xl">
				<img
					src="https://i.ibb.co/Rhc7SCn/mohit-suthar-d-Zy-Pczy-Mub-M-unsplash.jpg"
					className="w-full rounded-xl"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="btn btn-circle">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavCarousel;
