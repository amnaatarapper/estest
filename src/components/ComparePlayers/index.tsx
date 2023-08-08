import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { PlayerStats } from "../PlayerStats";

export const ComparePlayers = (): JSX.Element => {
  const { players } = useAppSelector(
    createSelector(
      (state: RootState) => state,
      ({ players }) => players
    )
  );

  const [playerA, playerB] = players;

  return (
    <>
      {players.length >= 2 && (
        <div className="flex gap-5 lg:flex-col">
          <PlayerStats key={playerA.id} player={playerA} />
          <PlayerStats key={playerB.id} player={playerB} />
        </div>
      )}
    </>
  );
};
