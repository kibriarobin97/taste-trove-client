import { Helmet } from "react-helmet-async";
import Cover from "../components/Cover";
import menuBg from "../assets/menu/banner3.jpg"
import PopularMenu from "../components/PopularMenu";

const Menu = () => {
    return (
        <div className="min-h-[calc(100vh-276px)]">
            <Helmet>
                <title>Menu | Taste Trove</title>
            </Helmet>
            <Cover img={menuBg} title={'OUR MENU'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;