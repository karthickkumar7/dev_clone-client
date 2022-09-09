import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  createThreadApi,
  getAllthreadsApi,
  getSinglethreadsApi,
  getUserThreadsApi,
} from "../api/threadApi";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  success: null,
  error: null,
  threads: [],
  userThreads: [],
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

export const createThread = createAsyncThunk(
  "threads/createThread",
  async (payload, thunkApi) => {
    try {
      const { data } = await createThreadApi(payload);
      return data;
    } catch ({ response }) {
      return thunkApi.rejectWithValue(response.data);
    }
  }
);
export const getUserThreads = createAsyncThunk(
  "threads/getUserThreads",
  async (payload, thunkApi) => {
    try {
      const { data } = await getUserThreadsApi();
      return data;
    } catch ({ response }) {
      return thunkApi.rejectWithValue(response.data);
    }
  }
);

const threadSlice = createSlice({
  name: "thread",

  initialState,

  reducers: {
    setError: (state, { payload }) => {
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload;
    },
    resetState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = null;
    },
  },

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
    // create thread
    builder.addCase(createThread.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(createThread.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.success = payload.msg;
      state.error = null;
      state.threads.push(payload.thread);
    });
    builder.addCase(createThread.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload?.msg || "Something went wrong!";
    });
    // get user thread
    builder.addCase(getUserThreads.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getUserThreads.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.success = payload.msg;
      state.error = null;
      state.userThreads = payload.threads;
    });
    builder.addCase(getUserThreads.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload?.msg || "Something went wrong!";
    });
  },
});

export const { setError, resetState } = threadSlice.actions;

export default threadSlice.reducer;
