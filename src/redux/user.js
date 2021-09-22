import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { searchTerm: "" },
  },
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { search } = userSlice.actions;
export default userSlice.reducer;
