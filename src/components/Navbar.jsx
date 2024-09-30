import {IoMdClose, IoMdMenu} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {getToken, getUserDetails, logout} from "../helper/SessionHelper.js";
import {useState} from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)


    const handleClick = () => {
        setOpen(!open)
    }

    const user = getUserDetails();

    return (
        <>
            <nav className="py-5 w-full bg-blue-950 text-white border border-gray-100">
                <div className="px-4 md:px-12 md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div
                            onClick={()=>{
                                navigate('/')
                                navigate(0);
                            }}
                            className="flex items-center cursor-pointer"
                        >
                            {/* <img src={logo} alt="logo" className="h-10 mr-3"/> */}
                            <span className="text-2xl text-white font-bold italic">Exchange</span>
                        </div>
                        <span className="block cursor-pointer text-3xl text-black bg-gray-100 p-2 rounded-lg md:hidden">
                             {open ? (
                                 <IoMdClose onClick={handleClick} size={25}/>
                             ): (
                                 <IoMdMenu onClick={handleClick} size={25}/>
                             )
                             }
                        </span>
                    </div>
                    <ul className={`p-5 z-10 absolute bg-white/80 md:bg-blue-950 backdrop-blur w-full left-0 py-4 top-[-400px] ${open ? "opacity-100 top-[80px]" : "opacity-0"}  transition-all ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100`}>
                        <li
                            onClick={()=>{
                                navigate('/')
                                navigate(0)
                            }}
                            className="md:my-0">
                            <span className="cursor-pointer font-medium duration-500 text-black md:text-white" >Exchange</span>
                        </li>
                        <li onClick={()=>navigate('/contact')} className="my-6 md:my-0">
                            <span className="cursor-pointer font-medium duration-500 text-black md:text-white" >Contact</span>
                        </li>
                        {getToken() ? (
                            <>
                                <li onClick={()=>navigate("/account/exchanges")} className="my-6 md:my-0">
                                    <span className="cursor-pointer font-medium duration-500 text-black md:text-white" >
                                        {user?.username}
                                    </span>
                                </li>
                                <li onClick={()=>logout()} className="my-6 md:my-0">
                                    <button className="w-full text-white bg-fuchsia-500 font-medium rounded-lg px-3.5 py-3 text-center hover:bg-fuchsia-700 hover:drop-shadow-md transition duration-300 ease-in-out">
                                        Logout
                                    </button>
                                </li>
                            </>
                         ): (
                             <>
                                 <li onClick={()=>navigate('/login')} className="my-6 md:my-0">
                                     <span className="cursor-pointer font-medium duration-500 text-black md:text-white hover:text-indigo-900 md:hover:text-white">Login</span>
                                 </li>
                                 <li onClick={()=>navigate('/register')}>
                                     <button className="w-full text-white bg-fuchsia-500 font-medium rounded-lg px-3.5 py-3 text-center hover:bg-fuchsia-700 hover:drop-shadow-md transition duration-300 ease-in-out">
                                         Register
                                     </button>
                                 </li>
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