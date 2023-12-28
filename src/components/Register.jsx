import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useRegisterMutation} from "../redux/features/auth/authApi.js";
import {IsEmail} from "../helper/ValidationHelper.js";
import {useDispatch, useSelector} from "react-redux";
import Error from "./validation/Error.jsx";
import {SetRegisterError} from "../redux/features/auth/authSlice.js";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePass, setRetypePass] = useState("");
    const [register, {isLoading, isSuccess}] = useRegisterMutation();
    const error = useSelector((state)=> state.auth.RegisterError);


    useEffect(()=>{
        if(isSuccess){
            dispatch(SetRegisterError(""))
            navigate('/login');
        }
    },[navigate,isSuccess, dispatch]);


    const handleSubmit = () => {
        if(username==="" || email==="" || password==="" || retypePass===""){
            dispatch(SetRegisterError("All fields are required.!"))
        }
        else if(IsEmail(email)){
            dispatch(SetRegisterError("Please enter a valid email address!"));
        }
        else if(password !== retypePass){
            dispatch(SetRegisterError("Password & Re-type Password must be same. !"))
        }
        else{
            register({
                username, email, password
            })
        }
    }





    return (
        <>
            <section id="main" className="bg-[#f7f7f7] py-10">
                <div className="container md:px-12 flex flex-col items-center">
                    <div className="bg-white px-14 py-12 w-2/5">
                        <h1 className="text-[#0090D4] text-center mb-5 title font-bold text-3xl">
                            Create account free
                        </h1>

                        {error && (
                            <Error message={error}/>
                         )
                        }
                        <div className="form flex flex-col gap-8 py-8">
                            <div>
                                <input onChange={(e)=>setUsername(e.target.value)} value={username} required className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="text" placeholder="Username"/>
                            </div>
                            <div>
                                <input onChange={(e)=>setEmail(e.target.value)} value={email} required className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="email" placeholder="Email Address"/>
                            </div>
                            <div>
                                <input onChange={(e)=>setPassword(e.target.value)} value={password} required className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="password" placeholder="Password"/>
                            </div>
                            <div>
                                <input onChange={(e)=>setRetypePass(e.target.value)} value={retypePass} required className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="password" placeholder="Re-type Password"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button onClick={handleSubmit} className="bg-[#0090D4] text-white px-5 py-2 rounded">
                                {isLoading ? "Processing..." : "Register"}
                            </button>
                        </div>

                        <div className="flex justify-end mt-10">
                            <span onClick={()=>navigate("/forgot-password")}  className="cursor-pointer text-[#b9b9b9] hover:text-[#0090D4] transition duration-500">
                                Forgot password?
                            </span>
                        </div>
                    </div>
                    <div className="w-2/5 mt-5">
                        <button onClick={()=>navigate('/login')} className="bg-[#0072bc] px-12 py-4 title text-white text-lg rounded  w-full">
                            Login with account
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;