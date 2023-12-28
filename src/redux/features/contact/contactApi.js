import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast} from "../../../helper/ValidationHelper.js";
import {SetContactSuccess} from "./contactSlice.js";


export const contactApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        contactCreate: builder.mutation({
            query: (data) => ({
                url: "/contact/create-contact",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        dispatch(SetContactSuccess(true));
                    }
                }catch(err) {
                    ErrorToast("Something went wrong!")
                }
            }
        }),
    }),
})


export const {useContactCreateMutation} = contactApi;