
const MenuItem = ({item}) => {

    const {name, recipe, image, price} = item;

    return (
        <div className="flex items-center gap-4">
            <img src={image} alt="" className="w-32 h-28 rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]" />
            <div>
                <h3 className="uppercase text-[20px] font-medium">{name}</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-[20px]">${price}</p>
        </div>
    );
};

export default MenuItem;