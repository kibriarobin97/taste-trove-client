import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="p-3">
            <SectionTitle
                subHeading={'Check it Out'}
                heading={'Popular Menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mb-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="mb-5 flex justify-center items-center">
                <Link to='/menu'>
                    <button className="btn btn-outline border-0 text-black border-b-2">View Full Menu</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;