import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginApi, registerApi } from "../api/authApi";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  success: null,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkApi) => {
    try {
      const { data } = await loginApi(payload);
      return data;
    } catch ({ response }) {
      return thunkApi.rejectWithValue(response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkApi) => {
    try {
      const { data } = await registerApi(payload);
      return data;
    } catch ({ response }) {
      return thunkApi.rejectWithValue(response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.success = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.success = payload.msg;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload?.msg || "Something went wrong!";
    });

    // register
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.success = payload.msg;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload?.msg || "Something went wrong!";
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
