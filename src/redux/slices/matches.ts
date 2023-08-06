import { createSlice } from "@reduxjs/toolkit";
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
    placeholder: (state) => {},
  },
});

export const { placeholder } = matchesSlice.actions;

export default matchesSlice.reducer;
