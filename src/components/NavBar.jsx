import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../hooks/useCart";
import defaultProfile from "../assets/logo/user.png"


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    // console.log(cart.length)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('log out'))
            .catch(error => console.error(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/contact'>Contact</Link></li>

    </>

    return (
        <div className="navbar bg-black bg-opacity-25 text-white fixed z-10 max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#BB8506] rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' >
                    <div className="btn btn-ghost uppercase flex flex-col">
                        <p className="tracking-wider font-bold">Taste-Trove</p>
                        <p className="tracking-widest">Restaurant</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <div className="flex justify-center items-center gap-1">
                        <div>
                            <Link to='/dashboard/cart'>
                                <button className="btn btn-sm">
                                    <FaCartPlus className="md:text-xl text-[#BB8506] text-center" />
                                    <div className="badge badge-success bg-[#BB8506] text-white">
                                        +{cart.length}</div>
                                </button>
                            </Link>
                        </div>
                        <p>{user?.displayName}</p>
                        <div className="avatar online">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || defaultProfile} />
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="btn btn-ghost bg-[#BB8506]">Log Out</button>
                    </div> : <Link to='/login' className="btn bg-[#BB8506]">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;