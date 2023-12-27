import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast,} from "../../../helper/ValidationHelper.js";
import {SetCurrent, SetCurrentPrice, SetRate, SetUnit, SetUnitPrice} from "./rateSlice.js";


export const rateApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRate: builder.mutation({
            query: (data) => ({
                url: "/rate/get-rate",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        const result = res?.data?.result
                        dispatch(SetRate(result));
                        dispatch(SetUnit(result?.unit))
                        dispatch(SetCurrent(result?.current))
                        dispatch(SetUnitPrice(result?.unit))
                        dispatch(SetCurrentPrice(result?.current))
                    }
                }catch(err) {
                    let status = err?.error?.status;
                    let result = err?.error?.data?.result;
                    if(status === 404){
                        ErrorToast(result);
                    }else{
                        ErrorToast("Something Went Wrong!")
                    }
                }
            }
        }),
    }),
})


export const {useGetRateMutation} = rateApi;