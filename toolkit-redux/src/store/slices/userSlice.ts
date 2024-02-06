import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers as fetchUsersService } from "../../services/userApi";

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

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const data = await fetchUsersService();
    return data;
  } catch (err: any) {
    return err.message;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default userSlice.reducer;
