import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaHome, FaCalendarAlt, FaCalendarCheck, FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar, FaBagShopping, FaBook } from "react-icons/fa6";
import { MdRateReview, MdMenu, MdEmail, MdRestaurant } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div>
            {/* medium device sidebar */}
            <div className="lg:hidden navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                isAdmin ? <>
                                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/admin-home'>
                                        <FaHome />
                                        Admin Home
                                    </NavLink></li>
                                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/add-items'>
                                        <MdRestaurant />
                                        add items
                                    </NavLink></li>
                                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/manage-items'>
                                        <TfiMenuAlt />
                                        manage items
                                    </NavLink></li>
                                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/manage-bookings'>
                                        <FaBook />
                                        Manage bookings
                                    </NavLink></li>
                                    <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/all-users'>
                                        <FaUsers />
                                        all users
                                    </NavLink></li>
                                </>
                                    :
                                    <>
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
                                    </>
                            }

                            <div className="divider divider-info"></div>

                            {/* shared nav item */}
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

                </div>
                <div className="navbar-end">
                    <Link to='/' className="btn btn-ghost text-sm">
                        <div className="uppercase flex flex-col">
                            <p className="tracking-wider font-bold">Taste-Trove</p>
                            <p className="tracking-widest">Restaurant</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex">
                {/* lg side bar */}
                <div className="w-1/5 min-h-screen bg-[#D1A054] hidden lg:block">
                    <Link to='/' >
                        <div className="uppercase flex flex-col py-5 px-8">
                            <p className="tracking-wider text-xl font-bold">Taste-Trove</p>
                            <p className="tracking-widest text-xl">Restaurant</p>
                        </div>
                    </Link>
                    <ul className="menu p-4 space-y-3">
                        {
                            isAdmin ? <>
                                <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/admin-home'>
                                    <FaHome />
                                    Admin Home
                                </NavLink></li>
                                <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/add-items'>
                                    <MdRestaurant />
                                    add items
                                </NavLink></li>
                                <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/manage-items'>
                                    <TfiMenuAlt />
                                    manage items
                                </NavLink></li>
                                <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/manage-bookings'>
                                    <FaBook />
                                    Manage bookings
                                </NavLink></li>
                                <li className="font-medium uppercase text-lg"><NavLink to='/dashboard/all-users'>
                                    <FaUsers />
                                    all users
                                </NavLink></li>
                            </>
                                :
                                <>
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
                                </>
                        }

                        <div className="divider divider-info"></div>

                        {/* shared nav item */}
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
        </div>
    );
};

export default Dashboard;