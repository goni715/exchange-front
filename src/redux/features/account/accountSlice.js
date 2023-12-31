import {createSlice} from "@reduxjs/toolkit";

export const accountSlice=createSlice({
    name:'account',
    initialState:{
        informationShow:false,
        sendAccountId:"658d2e2a61d015e063fd92dd",
        receiveAccountId:"658d2f2161d015e063fd92f4",
        sendAccountName:"",
        receiveAccountName:"",
        email: "",
        RocketFormValue: {
            rocketNumber:"",
            contactNumber:""
        },
        BkashFormValue: {
            personalNumber:"",
            contactNumber:""
        },
        NagadFormValue: {
            personalNumber:"",
            contactNumber:""
        },
        CityBankFormValue: {
            accountName:"",
            accountNumber: "",
            contactNumber:""
        },
        DutchBanglaFormValue: {
            accountName:"",
            accountNumber: "",
            contactNumber:"",
            contactNumber2:""
        }
    },
    reducers:{
        SetInformationShow:(state,action)=>{
            state.informationShow=action.payload
        },
        SetSendAccountName:(state,action)=>{
            state.sendAccountName=action.payload
        },
        SetReceiveAccountName:(state,action)=>{
            state.receiveAccountName=action.payload
        },
        SetSendAccountId:(state,action)=>{
            state.sendAccountId=action.payload
        },
        SetReceiveAccountId:(state,action)=>{
            state.receiveAccountId=action.payload
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
export  const {SetInformationShow, SetSendAccountId, SetReceiveAccountId, SetSendAccountName, SetReceiveAccountName, SetEmail, SetRocketFormValue, SetBkashFormValue, SetNagadFormValue, SetCityBankFormValue, SetDutchBanglaFormValue}=accountSlice.actions;
export const selectInformationShow= (state) => state.account.informationShow;
export const accountSliceReducer = accountSlice.reducer;
