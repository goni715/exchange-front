import {createSlice} from "@reduxjs/toolkit";

export const modalSlice=createSlice({
    name:'modal',
    initialState:{
        modalOpen: false
    },
    reducers:{
        SetModalOpen:(state,action)=>{
            state.modalOpen=action.payload
        }
    }
})
export  const { SetModalOpen}=modalSlice.actions;
export const selectModalOpen = (state) => state.modal.modalOpen;
export const modalSliceReducer = modalSlice.reducer;
