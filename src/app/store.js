import { configureStore } from "@reduxjs/toolkit";

import auth from "../app/slices/authSlice";
import thread from "../app/slices/threadSlice";

export default configureStore({
  reducer: {
    auth,
    thread,
  },

  devTools: true,
});
