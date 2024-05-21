import { Link } from "react-router-dom";
import featured from "../assets/home/featured.jpg"
import SectionTitle from "./SectionTitle";

const Featured = () => {
    return (
        <div className="hero min-h-screen bg-fixed mb-10" style={{ backgroundImage: `url(${featured})` }}>
            <div className="hero-overlay bg-opacity-70 "></div>
            <div className="hero-content text-neutral-content flex flex-col md:pb-16 px-10">
                <div className="w-full">
                    <SectionTitle subHeading={'Check it Out'} heading={'FROM OUR MENU'}></SectionTitle>
                </div>
                <div className="md:flex justify-center items-center gap-10">
                    <div className="lg:h-96 h-52 w-full">
                        <img src={featured} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="space-y-2 w-full mb-5 lg:mb-0">
                        <h2 className="text-lg">March 10, 2024</h2>
                        <p className="text-xl font-medium">WHERE CAN I GET SOME?</p>
                        <p>Whether you're craving classic comfort food or daring to explore innovative culinary creations, our menu has something to satisfy every palate. Join us for an unforgettable dining journey, where every dish tells a story and every bite is a delight.</p>
                        <div className="pt-4">
                            <Link to='/order'>
                                <button className="btn btn-outline uppercase border-0 text-white border-b-2">Order Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;