import FoodCard from "./FoodCard";

const orderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 my-10">
        {
            items.map(item => <FoodCard
                key={item._id}
                item={item}
            ></FoodCard>)
        }
    </div>
    );
};

export default orderTab;