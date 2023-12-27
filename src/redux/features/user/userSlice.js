import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SetUsers : (state, action)=>{
            state.users=action.payload;
        },
    }
})



export const {SetUsers} = userSlice.actions;
const userSliceReducer = userSlice.reducer;
export default userSliceReducer;