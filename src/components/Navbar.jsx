import {IoMdMenu} from "react-icons/io";
import logo from '../assets/images/logo.svg';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="py-5 bg-white top-0 border border-gray-100">
                <div className="container px-4 md:px-12 md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="logo" className="h-10 mr-3"/>
                            <span className="text-2xl text-gray-900 font-bold">Exchange</span>
                        </Link>
                        <span className="block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden">
                            <IoMdMenu size={25}/>
                        </span>
                    </div>
                    <ul className="p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 py-4 opacity-0 top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100">
                        <Link to="/" className="md:my-0">
                            <a className="font-medium duration-500 text-gray-900 hover:text-indigo-600" href="">Exchange</a>
                        </Link>
                        <Link to="/contact" className="my-6 md:my-0">
                            <a className="font-medium duration-500 text-gray-900 hover:text-indigo-600" href="">Contact</a>
                        </Link>
                        <Link to="/login" className="my-6 md:my-0">
                            <a className="font-medium duration-500 text-gray-900 hover:text-indigo-600" href="">Login</a>
                        </Link>
                        {/*<Link to="/register" className="my-6 md:my-0">*/}
                        {/*    <a className="font-medium duration-500 text-gray-900 hover:text-indigo-600" href="">Register</a>*/}
                        {/*</Link>*/}
                        <Link to="/register">
                            <button className="w-full text-white bg-indigo-600 font-medium rounded-lg px-3.5 py-3 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out">
                                Register
                            </button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;