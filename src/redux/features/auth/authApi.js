import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {setToken, setUserDetails} from "../../../helper/SessionHelper.js";
import {SetForgotError, SetResetError} from "./authSlice.js";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Register Success");
                    }

                }catch(err) {
                    let status = err?.error?.status;
                    let result = err?.error?.data?.result;
                    if(status === 409){
                        ErrorToast(result);
                    }else{
                        ErrorToast("Something Went Wrong!")
                    }
                }
            }
        }),

        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    // console.log(res?.meta?.response?.status);
                    if(res?.data?.message === "success"){
                        let MyToken = res.data['token'];
                        setToken(MyToken);
                        let user = res.data['result']; //This is Object
                        let userDetails = {
                            name: user['name'],
                            email: user['email'],
                            isAdmin: user['isAdmin'],
                        }
                        setUserDetails(userDetails);
                        SuccessToast("Login Success");
                    }




                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        ErrorToast("Could not Find this Email!");
                    }else if(status === 400){
                        ErrorToast("Wrong Password!")
                    }else{
                        ErrorToast("Something Went Wrong!")
                    }
                }
            }
        }),
        forgotPasswordVerifyEmail: builder.mutation({
            query: (data) => ({
                url: "/auth/recover-password-verify-email",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    // console.log(res?.meta?.response?.status);
                    // if(res?.data?.message === "success"){
                    //     SuccessToast("Email Send Success");
                    // }
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        dispatch(SetForgotError("Could not Find this Email!"));
                    }else{
                        dispatch(SetForgotError("Something Went Wrong!"));
                    }
                }
            }
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/reset-password",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    // console.log(res?.meta?.response?.status);
                    // if(res?.data?.message === "success"){
                    //     SuccessToast("Email Send Success");
                    // }
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 400){
                        dispatch(SetResetError("Link Expired!"));
                    }else{
                        dispatch(SetResetError("Something Went Wrong!"));
                    }
                }
            }
        }),

    }),
})


export const {useRegisterMutation, useLoginMutation, useForgotPasswordVerifyEmailMutation, useResetPasswordMutation} = authApi;