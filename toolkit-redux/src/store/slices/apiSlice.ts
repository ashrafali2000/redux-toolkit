import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData as fetchDataService } from "../../services/api";

interface ApiState {
  data: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const data = await fetchDataService();
  return data;
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default apiSlice.reducer;
