import {useEffect, useState} from "react";
import {useResetPasswordMutation,} from "../redux/features/auth/authApi.js";
import {useDispatch, useSelector} from "react-redux";
import {SetResetError} from "../redux/features/auth/authSlice.js";
import {useParams} from "react-router-dom";
import Error from "./validation/Error.jsx";
import Success from "./validation/Success.jsx";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [retypePass, setRetypePass] = useState("");
    const [resetPassword, {isLoading, isSuccess}] = useResetPasswordMutation();
    const dispatch = useDispatch();
    const {email, token} = useParams();
    const error = useSelector((state)=> state.auth.ResetError);

    useEffect(()=>{
        if(isSuccess){
            setNewPassword("");
            setRetypePass("");
            dispatch(SetResetError(""));
        }
    },[isSuccess, dispatch])



    const handleSubmit = () => {
        if(newPassword ===""){
            dispatch(SetResetError("Please enter your new password.!"));
        }
        else if(newPassword !== retypePass){
            dispatch(SetResetError("Passwords does not match.!"));
        }
        else{
            resetPassword({
                email,
                newPassword,
                token
             })
        }
    }



    return (
        <>
            <section id="main" className="bg-[#f7f7f7] py-20">
                <div className="container md:px-12 flex justify-center">
                    <div className="bg-white px-14 py-12 w-11/12 md:w-2/5">
                        <h1 className="text-gray-500 title text-2xl mb-5 text-center">Change password</h1>
                        <hr/>

                        {error==="" ? (
                                <>
                                    {isSuccess && (
                                        <>
                                            <Success>
                                                Your password was changed successfully.
                                            </Success>
                                        </>
                                    )
                                    }
                                </>
                            ) : (
                                <>
                                   <Error message={error}/>
                                </>
                            )
                        }


                        <div className="flex flex-col gap-8 py-8">
                            <div>
                                <label className="block text-center font-bold title text-[#6f6f6f] text-sm pb-2" htmlFor="email">New Password</label>
                                <input onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} required id="email" className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="password"/>
                            </div>
                            <div>
                                <label className="block text-center font-bold title text-[#6f6f6f] text-sm pb-2" htmlFor="email">
                                    Re-type password
                                </label>
                                <input onChange={(e)=>setRetypePass(e.target.value)} value={retypePass} required id="email" className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="password"/>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button onClick={handleSubmit} className="bg-[#0090D4] text-white px-5 py-2 rounded">
                                {isLoading ? "Processing..." : "Reset"}
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ResetPassword;