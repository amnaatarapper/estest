import { useState } from "react";
import { Player } from "../../types/players";
import { useAppSelector } from "../../redux/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import {
  calcWinAndLoses,
  cmToMeters,
  gramsToKilograms,
  parseWins,
} from "../../helpers/player";
import { CloseDetails } from "../ComparePlayers/components/CloseDetails";

type Props = {
  player: Player;
};
export const PlayerStats = ({ player }: Props) => {
  const { matches } = useAppSelector(
    createSelector(
      (state: RootState) => state,
      ({ matches }) => matches
    )
  );

  const { id, firstname, lastname, picture, country, sex, stats } = player;

  const { age, height, points, rank, weight } = stats;

  const [withDetails, setWithDetails] = useState(false);

  const { wins, loses } = calcWinAndLoses(id, matches);

  const parsedWins = parseWins(id, matches);

  const toggleDetails = () => {
    setWithDetails(!withDetails);
  };

  return (
    <div
      className={`player-stats ${withDetails ? "with-details" : ""}`}
      title="player stats"
      onClick={toggleDetails}
    >
      {withDetails && <CloseDetails onClick={toggleDetails} />}

      <div className="player-stats__content">
        <div className="player-stats__header">
          <img
            className="player-stats__picture"
            src={picture.url}
            alt={`${firstname} ${lastname} picture`}
          />

          <div className="player-stats__country">
            <img src={country.picture.url} alt="country" />
          </div>

          <h2 className="player-stats__name">
            <span
              className="player-stats__firstname"
              data-firstname={firstname}
            >
              {firstname}
            </span>
            <span className="player-stats__lastname">{lastname}</span>
          </h2>
        </div>

        <div className="player-stats__body">
          <div className="player-stats__info">
            <div className="player-stats__block">
              <h5 className="subtitle">Rank</h5>
              <p className="text">#{rank}</p>
            </div>
            <div className="player-stats__block">
              <h5 className="subtitle">Points</h5>
              <p className="text">{points}</p>
            </div>

            <div className="player-stats__block">
              <h5 className="subtitle">Age</h5>
              <p className="text">{age}</p>
            </div>
            <div className="player-stats__block">
              <h5 className="subtitle">Weight</h5>
              <p className="text">{gramsToKilograms(weight)}kg</p>
            </div>
            <div className="player-stats__block">
              <h5 className="subtitle">Height</h5>
              <p className="text">{cmToMeters(height)}m</p>
            </div>
            <div className="player-stats__block">
              <h5 className="subtitle">Sex</h5>
              <p className="text">{sex}</p>
            </div>
            <div className="player-stats__block">
              <h5 className="subtitle">Matches</h5>
              <p className="text">{height}</p>
            </div>
            <div className="player-stats__block">
              <h5 className="subtitle">Wins/Loses</h5>
              <p className="text">
                {wins}/{loses}
              </p>
            </div>
            <div className="player-stats__block">
              <h5 className="subtitle ">Total Time</h5>
              <p className="text text-3xl">1000h</p>
            </div>
          </div>

          {withDetails && (
            <div className="player-stats__titles">
              <h5 className="subtitle">Matches won</h5>
              {parsedWins.map(({ id, date, opponent }) => (
                <p key={id} className="text">
                  {date}, won a match against{" "}
                  {`${opponent.firstname} ${opponent.lastname}`}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
