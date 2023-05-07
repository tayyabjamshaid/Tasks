import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchallProducts = createAsyncThunk(
  "allproducts/fetchAllProducts",
  async () => {
    try {
        let { data } = await Axios.get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/");
        let newArray = data.map(function(el) {
        let o = Object.assign({}, el);
        o.totalViews = 0;
        return o;
  })
        localStorage.setItem("allProducts", JSON.stringify(newArray));
        return newArray;
    } catch (error) {
        console.log(error.response.data);
    }
  }
);
export const increaseTotalViews = createAsyncThunk(
    "allproducts/increaseViews",
    async (productData) => {
      try {
        const {id,views}=productData;
        return {id,views};
      } catch (error) {
          console.log("Count of Total Views is not working");
      }
    }
  );

const initialState = {
  allProducts: localStorage.getItem("allProducts")
    ? JSON.parse(localStorage.getItem("allProducts"))
    : [],
  error: "",
};

const fetchAllProductsReducer = createSlice({
  name: "fetchAllProducts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchallProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
    builder.addCase(fetchallProducts.rejected, (state, action) => {
      state.error = "All Products Data are not coming";
    });
    builder.addCase(increaseTotalViews.fulfilled, (state, action) => {
        const index = state.allProducts.findIndex(
          (todo) => todo.id === action.payload.id
        ); //finding index of the item
        const newArray = [...state.allProducts]; //making a new array
        newArray[index].totalViews = action.payload.views; //changing value in the new array
        state.allProducts = newArray;
      });
      builder.addCase(increaseTotalViews.rejected, (state, action) => {
        state.error = "Total Views is not working";
      });
 
  },
});

export default fetchAllProductsReducer.reducer;