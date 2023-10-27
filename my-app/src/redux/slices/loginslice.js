import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState ={
    login:[],
    loading:false,
    error:false,
};



export const loginform = createAsyncThunk("login",async(loginobj)=>{
    
    const response =await axios.post("http://localhost:2000/login/login",loginobj)
    console.log(response);
    return response
})

const loginslice = createSlice({
    name: "commonlogin",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(loginform.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(loginform.fulfilled, (state,action) => {
        state.loading = false;
        state.login=action.payload.data;
        localStorage.setItem("token",action.payload.data.token)
        localStorage.setItem("role",action.payload.data.user_role)
            });
      builder.addCase(loginform.rejected, (state) => {
        state.loading = false;
        state.error=true
      });
    },
});

export default loginslice.reducer;
