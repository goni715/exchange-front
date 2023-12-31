import {createSlice} from "@reduxjs/toolkit";

export const accountSlice=createSlice({
    name:'account',
    initialState:{
        informationShow:false,
        accountId:"658d2f2161d015e063fd92f4",
        email: "example@gmail.com",
        RocketFormValue: {
            rocketNumber:"01793837035",
            contactNumber:"08546423221"
        },
        BkashFormValue: {
            personalNumber:"01793837035",
            contactNumber:"08546423221"
        },
        NagadFormValue: {
            personalNumber:"n-01793837035",
            contactNumber:"08546423221"
        },
        CityBankFormValue: {
            accountName:"goni-city567",
            accountNumber: "86393455",
            contactNumber:"08546423221"
        },
        DutchBanglaFormValue: {
            accountName:"d-goni-city567",
            accountNumber: "d-86393455",
            contactNumber:"d-08546423221",
            contactNumber2:"d2-08546423221"
        }
    },
    reducers:{
        SetInformationShow:(state,action)=>{
            state.informationShow=action.payload
        },
        SetAccountId:(state,action)=>{
            state.accountId=action.payload
        },
        SetEmail:(state,action)=>{
            state.email=action.payload
        },
        SetRocketFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.RocketFormValue[property]=value;
        },
        SetBkashFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.BkashFormValue[property]=value;
        },
        SetNagadFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.NagadFormValue[property]=value;
        },
        SetCityBankFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.CityBankFormValue[property]=value;
        },
        SetDutchBanglaFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.DutchBanglaFormValue[property]=value;
        },
    }
})
export  const {SetInformationShow, SetAccountId, SetEmail, SetRocketFormValue, SetBkashFormValue, SetNagadFormValue, SetCityBankFormValue, SetDutchBanglaFormValue}=accountSlice.actions;
export const selectInformationShow= (state) => state.account.informationShow;
export const accountSliceReducer = accountSlice.reducer;
