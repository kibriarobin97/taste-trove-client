import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Featured from "../components/Featured";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";
import Recommends from "../components/Recommends";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-328px)]">
            <Helmet>
                <title>Home | Taste Trove</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;