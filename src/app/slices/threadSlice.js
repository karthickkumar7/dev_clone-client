import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllthreads } from "../api/threadApi";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  success: null,
  error: null,
};

export const getAllThreads = createAsyncThunk(
  "threads/getAllThreads",
  async (payload, thunkApi) => {
    try {
      const { data } = await getAllThreads();
      return data;
    } catch ({ response }) {
      return thunkApi.rejectWithValue(response.data);
    }
  }
);

const threadSlice = createSlice({
  name: "threads",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    // get all threads
    builder.addCase(getAllThreads.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getAllThreads.pending, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(getAllThreads.pending, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export const {} = threadSlice.actions;

export default threadSlice.reducer;
