import { configureStore } from "@reduxjs/toolkit";
import fetchAllProductsReducer from "./Reducers/fetchProducts";
import fetchAllDetailReducer from "./Reducers/detailProduct";


const store = configureStore({
  reducer: {
    allProductsData: fetchAllProductsReducer,
    productDetail:fetchAllDetailReducer
   },
});
export default store;