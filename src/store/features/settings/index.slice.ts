import { createSlice } from "@reduxjs/toolkit";

interface State {
  sidebar: {
    open: boolean;
  };
}

const initialState: State = {
  sidebar: {
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
  },
});

export const { toggleMenu } = settingsSlice.actions;

export default settingsSlice.reducer;
