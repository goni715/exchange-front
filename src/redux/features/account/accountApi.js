import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast} from "../../../helper/ValidationHelper.js";
import {SetMinimumValue, SetReservedValue} from "../rate/rateSlice.js";
import {SetReceiveAccountName, SetSendAccountName} from "./accountSlice.js";


export const accountApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllSendAccount: builder.query({
            query: () => `/account/get-all-send-account`,
            keepUnusedDataFor: 600,
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    // ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getAllReceiveAccount: builder.query({
            query: () => `/account/get-all-receive-account`,
            keepUnusedDataFor: 600,
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    // ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getReceiveAccount: builder.query({
            query: (id) => `/account/get-receive-account/${id}`,
            keepUnusedDataFor:false,
            async onQueryStarted(arg, {queryFulfilled, dispatch }){
                try{
                    const res = await queryFulfilled;
                    const data = res?.data?.data;
                    if(data){
                        dispatch(SetReservedValue(data?.reserved));
                        dispatch(SetReceiveAccountName(data?.name));
                    }
                }catch(err) {
                    // ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getSendAccount: builder.query({
            query: (id) => `/account/get-send-account/${id}`,
            keepUnusedDataFor:false,
            async onQueryStarted(arg, {queryFulfilled, dispatch }){
                try{
                    const res = await queryFulfilled;
                    const data = res?.data?.data;
                    if(data){
                        dispatch(SetMinimumValue(data?.minimum));
                        dispatch(SetSendAccountName(data?.name));
                    }
                }catch(err) {
                    // ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        })
    }),
})


export const {useGetAllSendAccountQuery, useGetAllReceiveAccountQuery, useGetSendAccountQuery, useGetReceiveAccountQuery} = accountApi;