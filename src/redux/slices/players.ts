import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../types/players";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    init: (state, action: PayloadAction<Player[]>) => {
      state.players = action.payload;
    },
  },
});

export const { init } = playersSlice.actions;

export default playersSlice.reducer;
