import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast} from "../../../helper/ValidationHelper.js";


export const accountApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAccount: builder.query({
            query: () =>
                `/account/get-all-account`,
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
        getAllSendAccount: builder.query({
            query: () =>
                `/account/get-all-send-account`,
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
            query: () =>
                `/account/get-all-receive-account`,
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        })
    }),
})


export const {useGetAllAccountQuery, useGetAllSendAccountQuery, useGetAllReceiveAccountQuery} = accountApi;