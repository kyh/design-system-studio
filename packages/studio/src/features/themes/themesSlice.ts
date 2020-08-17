import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/rootReducer";
import { defaultThemeState } from "./defaultTheme";

export const initialState: any = {
  currentTheme: { ...defaultThemeState },
  themes: [defaultThemeState.name],
};

const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {},
});

export const themesActions = themesSlice.actions;
export const themesReducer = themesSlice.reducer;
export const useThemes = () => {
  const state = useSelector((state: RootState) => state.themes);
  const dispatch = useDispatch();
  return { state, dispatch };
};
