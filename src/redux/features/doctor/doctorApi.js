import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";

export const doctorApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        applyDoctor: builder.mutation({
            query: (data) => ({
                url: "/user/apply-doctor",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Apply Success");
                    }
                }catch(err) {
                    console.log(err)
                    ErrorToast("Something Went Wrong!")
                }
            }
        }),
    }),
})


export const {useApplyDoctorMutation} = doctorApi;