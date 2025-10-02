import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data/initialData.json";
import { v4 as uuid } from "uuid";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialData,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, name, text } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets.push({ id: uuid(), name, text });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== widgetId);
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
