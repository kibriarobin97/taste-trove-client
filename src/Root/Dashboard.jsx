import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaHome, FaCalendarAlt, FaCalendarCheck } from "react-icons/fa";
import { FaMoneyCheckDollar, FaBagShopping } from "react-icons/fa6";
import { MdRateReview, MdMenu, MdEmail } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-1/5 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4 space-y-3">
                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/user-home'>
                        <FaHome />
                        User Home
                    </NavLink></li>
                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/reservation'>
                        <FaCalendarAlt />
                        Reservation
                    </NavLink></li>
                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/payment'>
                        <FaMoneyCheckDollar />
                        payment history
                    </NavLink></li>
                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/cart'>
                        <FaCartPlus />
                        My Cart
                    </NavLink></li>
                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/review'>
                        <MdRateReview />
                        add review
                    </NavLink></li>
                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/booking'>
                        <FaCalendarCheck />
                        my booking
                    </NavLink></li>
                    <div className="divider divider-info"></div>
                    <li className="font-medium uppercase text-lg"><NavLink to='/'>
                        <FaHome />
                        home
                    </NavLink></li>
                    <li className="font-medium uppercase text-lg"><NavLink to='/order/salad'>
                        <MdMenu />
                        menu
                    </NavLink></li>
                    <li className="font-medium uppercase text-lg"><NavLink to='/shop'>
                        <FaBagShopping />
                        Shop
                    </NavLink></li>
                    <li className="font-medium uppercase text-lg"><NavLink to='/contact'>
                        <MdEmail />
                        Contact
                    </NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 max-w-5xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;