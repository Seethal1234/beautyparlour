import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  viewproduct: [],
  singleproduct:{},
  myorders:{},
  loading: false,
  error: false,

};

const viewproduct_url = "http://localhost:2000/user/view-product";
const myorder_url = "http://localhost:2000/productbook/view-booked"

export const view_product = createAsyncThunk("viewproduct", async () => {
  const response = await fetch(viewproduct_url);
  return response.json();
});

export const booked_details= createAsyncThunk("myorders", async () => {
  const response = await fetch(myorder_url);
  return response.json();
});



export const singleproductview = createAsyncThunk("singleproduct", async (id) => {
  const response = await fetch(`http://localhost:2000/user/productdetails/${id}`);
  return response.json();
});

const productslice = createSlice({
  name: "productview",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(view_product.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(view_product.fulfilled, (state,action) => {
      state.loading = false;
      state.viewproduct=action.payload.product_details
    });
    builder.addCase(view_product.rejected, (state) => {
      state.loading = false;
      state.error=true
    });
    builder.addCase(singleproductview.pending,(state)=>{
      state.loading = true;
    })
    builder.addCase(singleproductview.fulfilled,(state,action) =>{
      state.loading = false;
      state.singleproduct = action.payload.product_details
    })
    builder.addCase(singleproductview.rejected,(state)=>{
      state.loading = false;
      state.error=true;
    })
    builder.addCase(booked_details.pending,(state)=>{
      state.loading = true;
    })
    builder.addCase(booked_details.fulfilled,(state,action)=>{
      state.loading = false;
      state.myorders=action.payload
    })
    builder.addCase(booked_details.rejected, (state) => {
      state.loading = false;
      state.error=true
    });
    

  
  },
});

export default productslice.reducer;
