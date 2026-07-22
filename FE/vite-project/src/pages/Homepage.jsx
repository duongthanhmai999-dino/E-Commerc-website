import './Homepage.css';
import TopHeader from '../components/TopHeader.jsx';
import MainHeader from '../components/MainHeader.jsx';
import Herobanner from '../components/HeroBanner.jsx';
import TodayFlashSale from '../components/TodayFlashSale.jsx';
import CategorySection from '../components/CategoryPhone.jsx';
import BestSelling from '../components/BestSelling.jsx';
import PromoBanner from '../components/PromoBanner.jsx';
import OurProducts from '../components/OurProducts.jsx';
import NewArrival from '../components/NewArrival.jsx';
import Services from '../components/Services.jsx';
import Footer from '../components/Footer.jsx';
const Homepage = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <Herobanner />
            <TodayFlashSale />
            <CategorySection />
            <BestSelling />
            <PromoBanner />
            <OurProducts />
            <NewArrival />
            <Services />
            <Footer />


        </>
    )
};
export default Homepage;
