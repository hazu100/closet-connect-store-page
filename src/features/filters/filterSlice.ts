import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Filters = {
  filters: number[];
  searchedText: string;
};

const initialState: Filters = {
  filters: [],
  searchedText: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<number[]>) => {
      state.filters = action.payload;
    },
    setSearchedText: (state, action: PayloadAction<string>) => {
      state.searchedText = action.payload;
    },
    setFiltersFromUrl(state, action: PayloadAction<number[]>) {
      state.filters = action.payload;
    },
    resetAll: (state) => {
      state.filters = [];
      state.searchedText = "";
    },
  },
});

export const { setFilters, setSearchedText, setFiltersFromUrl, resetAll } =
  filtersSlice.actions;
export default filtersSlice.reducer;
