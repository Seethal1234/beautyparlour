import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    registration: {},
    loading: false,
    error: false,
  };

export const register = createAsyncThunk("registration", async(registerobj)=>{
    const response = await axios.post("http://localhost:2000/register/register",registerobj
    // {method:"POST",body:JSON.parse(registerobj)}
    )
    return response.data
});

const registrationslice = createSlice({
name:"userreg",
initialState,
extraReducers:(builder)=>{
    builder.addCase(register.pending,(state)=>{
        state.loading=true;
    });
    builder.addCase(register.fulfilled,(state,action)=>{
        state.loading=false;
        state.registration=action.payload
    });
    builder.addCase(register.rejected,(state)=>{
        state.loading = false
        state.error=true;
    });
},

})

export default registrationslice.reducer