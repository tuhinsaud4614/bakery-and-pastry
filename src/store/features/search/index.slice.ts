import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  value: string;
}

const initialState: State = {
  value: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    onSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { onSearch } = searchSlice.actions;

export default searchSlice.reducer;
