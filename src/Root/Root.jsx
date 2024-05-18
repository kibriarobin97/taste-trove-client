import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Root = () => {

    const location = useLocation()
    const hideHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                {hideHeaderFooter || <NavBar></NavBar>}
                <Outlet></Outlet>
            </div>
            {hideHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;