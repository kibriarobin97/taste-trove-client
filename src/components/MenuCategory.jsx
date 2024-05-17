import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mb-10 mt-10 px-5 md:px-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="mb-10 flex justify-center items-center">
                <button className="btn btn-outline border-0 text-black border-b-2">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;