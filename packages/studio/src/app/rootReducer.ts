import { combineReducers } from "@reduxjs/toolkit";

import { appReducer } from "./appSlice";
import { tokensReducer } from "features/tokens/tokensSlice";
import { themesReducer } from "features/themes/themesSlice";
// import { systemsReducer } from "features/systems/systemsSlice";

const rootReducer = combineReducers({
  app: appReducer,
  tokens: tokensReducer,
  themes: themesReducer,
  // systems: systemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
