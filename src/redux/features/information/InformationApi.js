import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";


export const informationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getInformation: builder.query({
            query: () => `/information/get-information`,
            keepUnusedDataFor: 600,
            providesTags: ["Information"],
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
        updateInformation: builder.mutation({
            query: ({id,data}) => ({
                url: `/information/update-information/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Information"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Information Update Success");
                    }
                }catch(err) {
                    console.log(err)
                }
            }
        }),
    }),
})


export const {useUpdateInformationMutation, useGetInformationQuery} = informationApi;