import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState, AppThunk } from "../../store";

export interface FilterState {
  included: any;
  excluded: any;
  genreList: any;
}

const initialState: FilterState = {
  included: [],
  excluded: [],
  genreList: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addIncluded: (state: any, action: PayloadAction<string>) => {
      state.included = [...state.included, action.payload];
    },
    removeIncluded: (state: any, action: PayloadAction<string>) => {
      state.included = state.included.filter(
        (item: any) => item !== action.payload
      );
    },
    clearIncluded: (state: any) => {
      state.included = [];
    },
    addExcluded: (state: any, action: PayloadAction<string>) => {
      state.excluded = [...state.excluded, action.payload];
    },
    removeExcluded: (state: any, action: PayloadAction<string>) => {
      state.excluded = state.excluded.filter(
        (item: any) => item !== action.payload
      );
    },
    clearExcluded: (state: any) => {
      state.excluded = [];
    },
    resetGenreList: (state: any) => {
      state.genreList = state.genreList.map((item: any) => ({
        ...item,
        status: "neutral",
      }));
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const {
  addIncluded,
  addExcluded,
  removeIncluded,
  removeExcluded,
  clearIncluded,
  clearExcluded,
} = filterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIncluded = (state: AppState) => state.filter.included;
export const selectExcluded = (state: AppState) => state.filter.excluded;
export default filterSlice.reducer;
