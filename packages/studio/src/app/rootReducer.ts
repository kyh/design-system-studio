import { combineReducers } from "@reduxjs/toolkit";

import { appReducer } from "./appSlice";
import { tokensReducer } from "features/tokens/tokensSlice";
// import { systemsReducer } from "features/systems/systemsSlice";
// import { themesReducer } from "features/themes/themesSlice";

const rootReducer = combineReducers({
  app: appReducer,
  tokens: tokensReducer,
  // systems: systemsReducer,
  // themes: themesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
