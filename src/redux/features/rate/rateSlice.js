import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rate:{},
    unitPrice:"",
    currentPrice:"",
    unit:"",
    current:"",
    sendValue: "",
    receiveValue: "",
    unitExt:"",
    currentExt:"",
    reservedValue:"", //only number
    reserved:"", //without $, BDT
    minimumValue:"", //only number
    minimum:"",  //without $, BDT

}

const rateSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        SetRate: (state, action) => {
            state.rate = action.payload;
        },
        SetUnit: (state, action) => {
            state.unit = action.payload;
        },
        SetCurrent: (state, action) => {
            state.current = action.payload;
        },
        SetUnitPrice: (state, action) => {
            const text = action.payload;
            const result = text.split(' ');
            state.unitPrice = result[0];
            state.sendValue = result[0];
            state.unitExt = result[1];
        },
        SetCurrentPrice: (state, action) => {
            const text = action.payload;
            const result = text.split(' ');
            state.currentPrice = result[0];
            state.receiveValue = result[0];
            state.currentExt = result[1];
        },
        SetSendReceiveValue: (state, action) => {
            state.sendValue=action.payload;
            if(state.unitExt === state.currentExt){
                state.receiveValue = (action.payload * state.currentPrice).toFixed(2);
            }
            else if(state.unitExt==="USD" && state.currentExt==="BDT"){
                state.receiveValue = (action.payload * state.currentPrice).toFixed(2);
            }
            else if(state.unitExt==="BDT" && state.currentExt==="USD"){
                state.receiveValue = (action.payload / state.unitPrice).toFixed(2);
            }
        },
        SetReservedValue: (state, action) => {
            state.reserved = action.payload;
            const text = action.payload;
            const result = text.split(' ');
            state.reservedValue = result[0];
        },
        SetMinimumValue: (state, action) => {
            state.minimum = action.payload;
            const text = action.payload;
            const result = text.split(' ');
            state.minimumValue = result[0];
        },
    }
})



export const {SetRate, SetUnit, SetCurrent, SetUnitPrice, SetCurrentPrice, SetSendReceiveValue, SetReservedValue, SetMinimumValue} = rateSlice.actions;

const rateSliceReducer = rateSlice.reducer;
export default rateSliceReducer;