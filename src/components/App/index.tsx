import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { GET_PLAYERS } from "../../services/players";
import { GET_MATCHES } from "../../services/matches";
import { ComparePlayers } from "../ComparePlayers";
import FullscreenCentred from "../FullscreenCentred";

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

  if (playersLoading || matchesLoading)
    return (
      <FullscreenCentred>
        <p className="text-2xl">Loading...</p>
      </FullscreenCentred>
    );

  if (playersError || matchesError) {
    return (
      <FullscreenCentred>
        <p className="text-2xl">
          Une erreur inattendue est survenue, veuillez reessayer plus tard
        </p>
      </FullscreenCentred>
    );
  }

  return (
    <div className="app max-h-screen overflow-y-scroll">
      <div className=" mx-auto max-w-6xl">
        <ComparePlayers />
      </div>
    </div>
  );
};
