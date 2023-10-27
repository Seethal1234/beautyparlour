import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewservice: [],
  loading: false,
  error: false,
};

const viewservice_url = "http://localhost:2000/user/view-service" ; 
export const view_service = createAsyncThunk("viewservice", async()=>{
    const response = await fetch(viewservice_url)
    return response.json()
});




const serviceslice = createSlice({
    name:"services",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(view_service.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(view_service.fulfilled,(state,action)=>{
            state.loading=false;
            state.viewservice=action.payload.service_details
        });
        builder.addCase(view_service.rejected,(state)=>{
            state.loading=false;
            state.error=true;
        })
    }
})

export default serviceslice.reducer
