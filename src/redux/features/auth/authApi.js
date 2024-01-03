import {apiSlice} from "../api/apiSlice.js";
import { SuccessToast} from "../../../helper/ValidationHelper.js";
import {setToken, setUserDetails} from "../../../helper/SessionHelper.js";
import {SetForgotError, SetLoginError, SetRegisterError, SetResetError} from "./authSlice.js";


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
                        dispatch(SetRegisterError(result));
                    }else{
                        dispatch(SetRegisterError(result));
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
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    // console.log(res?.meta?.response?.status);
                    if(res?.data?.message === "success"){
                        let MyToken = res.data['token'];
                        setToken(MyToken);
                        let user = res.data['result']; //This is Object
                        let userDetails = {
                            username: user['username'],
                            email: user['email'],
                        }
                        setUserDetails(userDetails);
                        SuccessToast("Login Success");
                        // window.location.href="/";
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        dispatch(SetLoginError("Could not Find this Email!"));
                    }else if(status === 400){
                        dispatch(SetLoginError("Wrong Password!"));
                    }else{
                        dispatch(SetLoginError("Something Went Wrong!"));
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