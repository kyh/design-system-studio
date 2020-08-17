import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/rootReducer";
import { defaultTokensState } from "./defaultTokens";

export const initialState: any = { ...defaultTokensState };

const camelize = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    add_new_token_set: (state) => {
      const tokenKey = `customToken${Object.keys(state).length}`;
      state[tokenKey] = {
        name: "Custom Token",
        description: "",
        values: {},
      };
    },
    update_token_meta: (
      state,
      {
        payload,
      }: PayloadAction<{
        tokenKey: string;
        newName: string;
        newDescription: string;
      }>
    ) => {
      const key = camelize(payload.newName);
      state[key] = state[payload.tokenKey];
      state[key].name = payload.newName;
      state[key].description = payload.newDescription;
      delete state[payload.tokenKey];
    },
    update_token_set_values: (
      state,
      { payload }: PayloadAction<{ tokenKey: string; values: any }>
    ) => {
      state[payload.tokenKey].values = payload.values;
    },
  },
});

export const tokensActions = tokensSlice.actions;
export const tokensReducer = tokensSlice.reducer;
export const useTokens = () => {
  const state = useSelector((state: RootState) => state.tokens);
  const dispatch = useDispatch();
  return { state, dispatch };
};
