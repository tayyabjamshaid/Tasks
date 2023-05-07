import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchdetailUsers = createAsyncThunk(
  "alldetails/fetchDetailUsers",
  async (id) => {
    try {
        let { data } = await Axios.get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`);
        localStorage.setItem("detailUser", JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error.response.data);
    }
  }
);


const initialState = {
    detailUser: localStorage.getItem("detailUser")
    ? JSON.parse(localStorage.getItem("detailUser"))
    : [],
  error: "",
};

const fetchDetailReducer = createSlice({
  name: "fetchDetailUsers",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchdetailUsers.fulfilled, (state, action) => {
      state.detailUser = action.payload;
    });
    builder.addCase(fetchdetailUsers.rejected, (state, action) => {
      state.error = "All Details Data are not coming";
    });
 
  },
});

export default fetchDetailReducer.reducer;