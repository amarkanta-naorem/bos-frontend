import { createSlice } from "@reduxjs/toolkit";

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    sidebarToggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    }
  },
});

export const { sidebarToggleMenu } = DashboardSlice.actions;
export default DashboardSlice.reducer;
