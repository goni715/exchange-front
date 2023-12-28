import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast} from "../../../helper/ValidationHelper.js";
import {SetMinimumValue, SetReservedValue} from "../rate/rateSlice.js";


export const accountApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllSendAccount: builder.query({
            query: () => `/account/get-all-send-account`,
            keepUnusedDataFor: 600,
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
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
                    ErrorToast("Something Went Wrong!");
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
                    const data = res?.data?.result;
                    if(data){
                        dispatch(SetReservedValue(data?.reserved));
                    }
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
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
                    const data = res?.data?.result;
                    if(data){
                        dispatch(SetMinimumValue(data?.minimum));
                    }
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        })
    }),
})


export const {useGetAllSendAccountQuery, useGetAllReceiveAccountQuery, useGetSendAccountQuery, useGetReceiveAccountQuery} = accountApi;