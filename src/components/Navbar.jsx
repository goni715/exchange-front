import {IoMdMenu} from "react-icons/io";
import logo from '../assets/images/logo.svg';
import {Link, useNavigate} from "react-router-dom";
import {getToken, getUserDetails, logout} from "../helper/SessionHelper.js";

const Navbar = () => {
    const navigate = useNavigate();
    const user = getUserDetails();

    return (
        <>
            <nav className="py-5 w-full bg-white border border-gray-100 bg-red-300">
                <div className="px-4 md:px-12 md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div
                            onClick={()=>{
                                navigate('/')
                                navigate(0);
                            }}
                            className="flex items-center"
                        >
                            <img src={logo} alt="logo" className="h-10 mr-3"/>
                            <span className="text-2xl text-gray-900 font-bold">Exchange</span>
                        </div>
                        <span className="block cursor-pointer mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden">
                            <IoMdMenu size={25}/>
                        </span>
                    </div>
                    <ul className="p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 py-4 opacity-0 top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100">
                        <li
                            onClick={()=>{
                                navigate(0)
                                navigate('/')
                            }}
                            className="md:my-0">
                            <a className="font-medium duration-500 text-gray-900 hover:text-indigo-600" href="">Exchange</a>
                        </li>
                        <Link to="/contact" className="my-6 md:my-0">
                            <a className="font-medium duration-500 text-gray-900 hover:text-indigo-600" href="">Contact</a>
                        </Link>
                        {getToken() ? (
                            <>
                                <Link to="/account/exchanges" className="my-6 md:my-0">
                                    <a className="font-medium duration-500 text-gray-900 hover:text-indigo-600" href="">
                                        {user?.username}
                                    </a>
                                </Link>
                                <li onClick={()=>logout()} className="my-6 md:my-0">
                                    <button className="w-full text-white bg-indigo-600 font-medium rounded-lg px-3.5 py-3 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out">
                                        Logout
                                    </button>
                                </li>
                            </>
                         ): (
                             <>
                                 <Link to="/login" className="my-6 md:my-0">
                                     <a className="font-medium duration-500 text-gray-900 hover:text-indigo-600" href="">Login</a>
                                 </Link>
                                 <Link to="/register">
                                     <button className="w-full text-white bg-indigo-600 font-medium rounded-lg px-3.5 py-3 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out">
                                         Register
                                     </button>
                                 </Link>
                             </>
                          )
                        }

                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;