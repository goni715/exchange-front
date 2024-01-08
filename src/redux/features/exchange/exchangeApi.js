import {apiSlice} from "../api/apiSlice.js";

export const exchangeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        exchangeCreate: builder.mutation({
            query: (data) => ({
                url: "/exchange/create-exchange",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        // SuccessToast("Exchange Create Success");
                    }
                }catch(err) {
                    console.log(err)
                    // ErrorToast("Something went wrong!")
                }
            }
        }),
        getUserExchanges: builder.query({
            query: () => `/exchange/get-user-exchanges`,
            keepUnusedDataFor:600,
            async onQueryStarted(arg, {queryFulfilled, dispatch }){
                try{
                    const res = await queryFulfilled;
                    const data = res?.data?.data;
                }catch(err) {
                    // ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getRecentCompletedExchanges: builder.query({
            query: () => `/exchange/get-recent-completed-exchanges`,
            keepUnusedDataFor:600,
            async onQueryStarted(arg, {queryFulfilled, dispatch }){
                try{
                    const res = await queryFulfilled;
                    const data = res?.data?.data;
                }catch(err) {
                    // ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        })
    }),
})


export const {useExchangeCreateMutation, useGetUserExchangesQuery, useGetRecentCompletedExchangesQuery} = exchangeApi;