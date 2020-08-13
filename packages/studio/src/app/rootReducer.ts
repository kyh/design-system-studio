import { combineReducers } from "@reduxjs/toolkit";

import { appReducer } from "./appSlice";
// import { systemsReducer } from "features/systems/systemsSlice";
// import { tokensReducer } from "features/tokens/tokensSlice";
// import { themesReducer } from "features/themes/themesSlice";

const rootReducer = combineReducers({
  app: appReducer,
  // systems: systemsReducer,
  // tokens: tokensReducer,
  // themes: themesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
