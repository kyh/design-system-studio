import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import logger from "redux-logger";
import rootReducer, { RootState } from "./rootReducer";

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
