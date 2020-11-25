import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { Themes } from "./themes";
import { RootState } from "./rootReducer";

type CurrentAppState = {
  theme: Themes;
};

const getTheme = (): Themes => {
  const theme = localStorage.getItem("theme") as Themes;
  if (theme) return theme;
  if (window.matchMedia) {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (darkTheme) return "dark";
  }
  return "light";
};

export const initialState: CurrentAppState = {
  // TODO: replace with getTheme
  theme: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    change_theme: (state, { payload }: PayloadAction<{ theme: Themes }>) => {
      state.theme = payload.theme;
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
export const useApp = () => {
  const state = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  return { state, dispatch };
};
