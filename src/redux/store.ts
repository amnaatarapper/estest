import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./slices/players";
import matchesSlice from "./slices/matches";

export const store = configureStore({
  reducer: { players: playersSlice, matches: matchesSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
