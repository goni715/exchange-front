import {createSlice} from "@reduxjs/toolkit";

export const modalSlice=createSlice({
    name:'modal',
    initialState:{
        modalOpen: false,
        transactionModalOpen:false
    },
    reducers:{
        SetModalOpen:(state,action)=>{
            state.modalOpen=action.payload
        },
        SetTransactionModalOpen:(state,action)=>{
            state.transactionModalOpen=action.payload
        }
    }
})
export  const { SetModalOpen, SetTransactionModalOpen}=modalSlice.actions;
export const selectModalOpen = (state) => state.modal.modalOpen;
export const selectTransactionModalOpen = (state) => state.modal.transactionModalOpen;

export const modalSliceReducer = modalSlice.reducer;
