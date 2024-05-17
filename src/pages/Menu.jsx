import { Helmet } from "react-helmet-async";
import Cover from "../components/Cover";
import menuBg from "../assets/menu/banner3.jpg"
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "../components/MenuCategory";


const Menu = () => {

    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div className="min-h-[calc(100vh-276px)]">
            <Helmet>
                <title>Menu | Taste Trove</title>
            </Helmet>
            <Cover img={menuBg} title={'OUR MENU'}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={'Todays Offer'}></SectionTitle>
            {/* offered section */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert section */}
            <MenuCategory
            items={dessert}
            title={'Desserts'}
            img={dessertImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;