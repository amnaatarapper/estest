import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Match } from "../../types/matches";

export interface PlayersState {
  matches: Match[];
}

const initialState: PlayersState = {
  matches: [],
};

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Match[]>) => {
      state.matches = action.payload;
    },
  },
});

export const { init } = matchesSlice.actions;

export default matchesSlice.reducer;
