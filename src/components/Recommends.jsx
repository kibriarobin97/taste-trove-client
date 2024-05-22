import useMenu from "../hooks/useMenu";
import FoodCard from "./FoodCard";
import SectionTitle from "./SectionTitle";

const Recommends = () => {

    const [menu] = useMenu()
    const recommend = menu.slice(0, 3)

    return (
        <div>
            <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 my-10">
                {
                    recommend.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Recommends;