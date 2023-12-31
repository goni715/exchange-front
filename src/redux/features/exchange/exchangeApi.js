import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";


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
                        SuccessToast("Exchange Create Success");
                    }
                }catch(err) {
                    ErrorToast("Something went wrong!")
                }
            }
        }),
    }),
})


export const {useExchangeCreateMutation} = exchangeApi;