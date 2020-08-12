import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { themes } from "@dss/ui";
import { RootState } from "./rootReducer";

type ThemeType = keyof typeof themes;
type CurrentAppState = {
  theme: ThemeType;
};

const getTheme = (): ThemeType => {
  const theme = localStorage.getItem("theme") as ThemeType;
  if (theme) return theme;
  if (window.matchMedia) {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (darkTheme) return "dark";
  }
  return "light";
};

export const initialState: CurrentAppState = {
  theme: getTheme(),
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    change_theme: (state, { payload }: PayloadAction<{ theme: ThemeType }>) => {
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
