import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    success:false
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        SetContactSuccess: (state, action) => {
            state.success = action.payload;
        }
    }
})



export const {SetContactSuccess} = contactSlice.actions;

const contactSliceReducer = contactSlice.reducer;
export default contactSliceReducer;