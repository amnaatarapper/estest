import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../services/players";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { GET_MATCHES } from "../services/matches";
import { RootState } from "../redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { PlayerStats } from "./PlayerStats";

function App() {
  const dispatch = useAppDispatch();

  const {
    loading: playersLoading,
    error: playersError,
    data: playersData,
  } = useQuery(GET_PLAYERS);

  const {
    loading: matchesLoading,
    error: matchesError,
    data: matchesData,
  } = useQuery(GET_MATCHES);

  useEffect(() => {
    if (playersData) {
      dispatch({ type: "players/init", payload: playersData.players });
    }
  }, [dispatch, playersData]);

  useEffect(() => {
    if (matchesData) {
      dispatch({ type: "matches/init", payload: matchesData.matches });
    }
  }, [dispatch, matchesData]);

  const { players } = useAppSelector(
    createSelector(
      (state: RootState) => state,
      ({ players }) => players
    )
  );

  const { matches } = useAppSelector(
    createSelector(
      (state: RootState) => state,
      ({ matches }) => matches
    )
  );

  console.log(players, matches);

  if (playersLoading || matchesLoading) return <p>Loading...</p>;
  if (playersError || matchesError) return <p>Error</p>;

  return (
    <div className="app">
      <div className="app__container">
        {players.map((player) => (
          <PlayerStats key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

export default App;
