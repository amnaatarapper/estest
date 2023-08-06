import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../services/players";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { GET_MATCHES } from "../services/matches";
import { ComparePlayers } from "./ComparePlayers";

export const App = () => {
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

  if (playersLoading || matchesLoading) return <p>Loading...</p>;
  if (playersError || matchesError) return <p>Error</p>;

  return (
    <div className="app">
      <div className="app__container">
        <ComparePlayers />
      </div>
    </div>
  );
};
