import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    ForgotError: "",
    ResetError: "",
    LoginError: "",
    RegisterError: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        ShowLoading : (state)=>{
            state.loading=true;
        },
        HideLoading : (state)=>{
            state.loading=false;
        },
        SetForgotError : (state, action)=>{
            state.ForgotError=action.payload;
        },
        SetResetError : (state, action)=>{
            state.ResetError=action.payload;
        },
        SetLoginError : (state, action)=>{
            state.LoginError=action.payload;
        },
        SetRegisterError : (state, action)=>{
            state.RegisterError=action.payload;
        }
    }
})



export const {ShowLoading, HideLoading, SetForgotError, SetResetError, SetLoginError, SetRegisterError} = authSlice.actions;

const authSliceReducer = authSlice.reducer;
export default authSliceReducer;