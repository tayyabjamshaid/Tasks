import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Reducers/SearchReducer";


const store = configureStore({
  reducer: {
    SearchUsersReducer: SearchReducer,
   },
});
export default store;