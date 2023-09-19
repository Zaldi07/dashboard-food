import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSideBar } = userSlice.actions;
export default userSlice.reducer;
