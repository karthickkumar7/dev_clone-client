import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllthreadsApi, getSinglethreadsApi } from "../api/threadApi";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  success: null,
  error: null,
  threads: [],
  thread: null,
};

export const getAllThreads = createAsyncThunk(
  "threads/getAllThreads",
  async (payload, thunkApi) => {
    try {
      const { data } = await getAllthreadsApi();
      return data;
    } catch ({ response }) {
      return thunkApi.rejectWithValue(response.data);
    }
  }
);

export const getSingleThread = createAsyncThunk(
  "threads/getSingleThread",
  async (payload, thunkApi) => {
    try {
      const { data } = await getSinglethreadsApi(payload);
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
    builder.addCase(getAllThreads.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.success = payload.msg;
      state.error = null;
      state.threads = payload.threads;
    });
    builder.addCase(getAllThreads.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload?.msg || "Something went wrong!";
    });
    // get singlethreads
    builder.addCase(getSingleThread.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleThread.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.success = payload.msg;
      state.error = null;
      state.thread = payload.thread;
    });
    builder.addCase(getSingleThread.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload?.msg || "Something went wrong!";
    });
  },
});

export const {} = threadSlice.actions;

export default threadSlice.reducer;
