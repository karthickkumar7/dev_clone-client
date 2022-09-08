import { configureStore } from "@reduxjs/toolkit";

import auth from "../app/slices/authSlice";

export default configureStore({
  reducer: {
    auth,
  },

  devTools: true,
});
