import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import settingReducer from "./setting"

export default configureStore({
  reducer: {
    user: userReducer,
    setting: settingReducer
  },
});
