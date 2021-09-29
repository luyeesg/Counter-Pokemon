import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    value: { darkModeActive: false },
  },
  reducers: {
    darkMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { darkMode } = settingSlice.actions;
export default settingSlice.reducer;
