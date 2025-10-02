import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice.jsx";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export default store;
