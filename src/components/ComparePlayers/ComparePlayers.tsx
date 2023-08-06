import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { PlayerStats } from "../PlayerStats";

export const ComparePlayers = () => {
  const { players } = useAppSelector(
    createSelector(
      (state: RootState) => state,
      ({ players }) => players
    )
  );

  const [playerA, playerB] = players;

  if (players.length) {
    return (
      <>
        <PlayerStats key={playerA.id} player={playerA} />
        <PlayerStats key={playerB.id} player={playerB} />
      </>
    );
  }
};
