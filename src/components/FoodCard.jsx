
const FoodCard = ({item}) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="relative card bg-base-100 shadow-xl">
            <figure className="px-0">
                <img src={image} alt={name} className="object-cover" />
            </figure>
            <p className="absolute top-0 left-1 bg-[#BB8506] text-white px-3 py-1 font-semibold">${price}</p>
            <div className="card-body text-center flex flex-col items-center px-5 pt-4">
                <h2 className="card-title text-2xl font-semibold">{name}</h2>
                <p className=" text-[#737373]">{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline uppercase font-medium border-0 hover:border-[#BB8506] text-[#BB8506] border-b-2 bg-[#E8E8E8] hover:text-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;