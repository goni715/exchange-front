import {useEffect, useState} from "react";
import {useForgotPasswordVerifyEmailMutation,} from "../redux/features/auth/authApi.js";
import {useDispatch, useSelector} from "react-redux";
import {SetForgotError} from "../redux/features/auth/authSlice.js";
import Error from "./validation/Error.jsx";
import Success from "./validation/Success.jsx";
import Alert from "./validation/Alert.jsx";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [forgotPasswordVerifyEmail, {isLoading, isSuccess}] = useForgotPasswordVerifyEmailMutation();
    const dispatch = useDispatch();
    const error = useSelector((state)=> state.auth.ForgotError);

    useEffect(()=>{
        if(isSuccess){
            setEmail("");
            dispatch(SetForgotError(""));
        }
    },[isSuccess, dispatch])



        const handleSubmit = () => {
           if(email ===""){
               dispatch(SetForgotError("Please enter your email address!"));
           }else{
               forgotPasswordVerifyEmail({
                   email
               })
           }
        }



    return (
        <>
            <section id="main" className="bg-[#f7f7f7] py-20">
                <div className="container md:px-12 flex justify-center">
                    <div className="bg-white px-14 py-12 w-full md:w-2/5">
                        <h1 className="text-gray-600 title text-2xl mb-5 text-center">Forgot password?</h1>
                        <hr/>

                        {error==="" ? (
                                <>
                                    {isSuccess ? (
                                        <>
                                            <Success>
                                                We have just sent you a verification email. Check your inbox or spam folder.
                                            </Success>
                                        </>
                                    ) : (
                                        <>
                                            <Alert>
                                                Please enter your email address in form below to send you link for password reset.
                                            </Alert>
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
                                <label className="block text-center font-bold title text-[#6f6f6f] text-sm pb-2" htmlFor="email">Email Address</label>
                                <input onChange={(e)=>setEmail(e.target.value)} value={email} required id="email" className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="email"/>
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

export default ForgotPassword;