import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  sidebar: {
    open: boolean;
  };
  adminSidebarOpen: {
    open: boolean;
  };
}

const initialState: State = {
  sidebar: {
    open: false,
  },
  adminSidebarOpen: {
    open: false,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      state.sidebar.open = !state.sidebar.open;
    },
    toggleAdminMenu: (state, { payload }: PayloadAction<boolean>) => {
      state.adminSidebarOpen.open = payload;
    },
  },
});

export const { toggleMenu, toggleAdminMenu } = settingsSlice.actions;

export default settingsSlice.reducer;
