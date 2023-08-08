import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { Player } from "../types/players";
import {
  calcTotalPlaytimeInHours,
  calcWinAndLoses,
  parseWins,
} from "../helpers/player";
import { ParsedWin } from "../types/matches";

type MatchesStats = {
  wins: number;
  loses: number;
  parsedWins: ParsedWin[];
  totalPlaytime: number;
};

const useMatches = (playerId: Player["id"]): MatchesStats => {
  const { matches } = useAppSelector(
    createSelector(
      (state: RootState) => state,
      ({ matches }) => matches
    )
  );

  const { wins, loses } = calcWinAndLoses(playerId, matches);
  const totalPlaytime = calcTotalPlaytimeInHours(playerId, matches);
  const parsedWins = parseWins(playerId, matches);

  return { wins, loses, parsedWins, totalPlaytime };
};

export default useMatches;
