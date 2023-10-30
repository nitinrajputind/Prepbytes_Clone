import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Slice/CreateSlice";

const store = configureStore({
  reducer: {
    cart : Slice,
  },
});
export default store;