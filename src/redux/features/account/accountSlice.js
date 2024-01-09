import {createSlice} from "@reduxjs/toolkit";

export const accountSlice=createSlice({
    name:'account',
    initialState:{
        informationShow:false,
        sendAccountId:"659d8664510cf0bdd944d27c",
        receiveAccountId:"659d8a30510cf0bdd944d2ca",
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
        },
        PerfectMoneyFormValue: {
            perfectUID:"",
            contactNumber:"",
        },
        WebMoneyFormValue: {
            wmzPurseId:"",
            contactNumber:"",
        },
        BracBankFormValue: {
            accountName:"",
            accountNumber: "",
            contactNumber:""
        },
        ReceiveAccountInformation: {

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
            state.ReceiveAccountInformation=state.RocketFormValue;
        },
        SetBkashFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.BkashFormValue[property]=value;
            state.ReceiveAccountInformation=state.BkashFormValue;
        },
        SetNagadFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.NagadFormValue[property]=value;
            state.ReceiveAccountInformation=state.NagadFormValue;
        },
        SetCityBankFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.CityBankFormValue[property]=value;
            state.ReceiveAccountInformation=state.CityBankFormValue;
        },
        SetDutchBanglaFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.DutchBanglaFormValue[property]=value;
            state.ReceiveAccountInformation=state.DutchBanglaFormValue;
        },
        SetPerfectMoneyFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.PerfectMoneyFormValue[property]=value;
            state.ReceiveAccountInformation=state.PerfectMoneyFormValue;
        },
        SetWebMoneyFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.WebMoneyFormValue[property]=value;
            state.ReceiveAccountInformation=state.WebMoneyFormValue;
        },
        SetBracBankFormValue:(state,action)=>{
            const {property, value} = action.payload;
            state.BracBankFormValue[property]=value;
            state.ReceiveAccountInformation=state.BracBankFormValue;
        },
    }
})
export  const {SetInformationShow, SetSendAccountId, SetReceiveAccountId, SetSendAccountName, SetReceiveAccountName, SetEmail, SetRocketFormValue, SetBkashFormValue, SetNagadFormValue, SetCityBankFormValue, SetDutchBanglaFormValue, SetPerfectMoneyFormValue, SetWebMoneyFormValue, SetBracBankFormValue}=accountSlice.actions;
export const selectInformationShow= (state) => state.account.informationShow;
export const accountSliceReducer = accountSlice.reducer;
