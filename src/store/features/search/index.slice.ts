import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  value: string;
}

const initialState: State = {
  value: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    onSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { onSearch } = settingsSlice.actions;

export default settingsSlice.reducer;
