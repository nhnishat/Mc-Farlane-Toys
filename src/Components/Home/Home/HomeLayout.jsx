import { Helmet } from 'react-helmet';
import AosPage from '../AosPage/AosPage';
import NavCarousel from '../Carousel/NavCarousel';
import DisplayImg from '../DisplayImg/DisplayImg';
import Gallery from '../Gallery/Gallery';
import ReactTab from '../ReactTabs/ReactTab';

const HomeLayout = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Mc Farlane Toys</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<NavCarousel />
			<Gallery />
			<DisplayImg />
			<ReactTab />
			<AosPage />
		</div>
	);
};

export default HomeLayout;
