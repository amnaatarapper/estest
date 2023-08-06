import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../types/players";

export interface PlayersState {
  players: Player[];
}

const initialState: PlayersState = {
  players: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    placeholder: (state) => {},
  },
});

export const { placeholder } = playersSlice.actions;

export default playersSlice.reducer;
