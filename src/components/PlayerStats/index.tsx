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
import { CloseDetails } from "../CloseDetails";

type Props = {
  player: Player;
};
export const PlayerStats = ({ player }: Props): JSX.Element => {
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
      className={`player-stats flex flex-col items-center overflow-hidden py-28 transition duration-250 lg:py-4 ${
        withDetails ? "with-details" : ""
      }`}
      title="player stats"
      onClick={toggleDetails}
    >
      {withDetails && <CloseDetails onClick={toggleDetails} />}

      <div className="bg-white p-12">
        <div className="flex flex-wrap justify-between mb-12 sm:flex-col sm:items-center sm:justify-center sm:gap-4">
          <img
            className="w-48 h-48 object-cover"
            src={picture.url}
            alt={`${firstname} ${lastname} picture`}
          />

          <div className="w-40">
            <img src={country.picture.url} alt="country" />
          </div>

          <h2 className="basis-[100%]">
            <div className="player-stats__firstname" data-firstname={firstname}>
              {firstname}
            </div>
            <div className="player-stats__lastname">{lastname}</div>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-x-12 gap-y-16">
          <div>
            <h3 className="text-gray-400">Rank</h3>
            <p className="text-orange-500">#{rank}</p>
          </div>
          <div>
            <h3 className="text-gray-400">Points</h3>
            <p className="text-orange-500">{points}</p>
          </div>

          <div>
            <h3 className="text-gray-400">Age</h3>
            <p className="text-orange-500">{age}</p>
          </div>
          <div>
            <h3 className="text-gray-400">Weight</h3>
            <p className="text-orange-500">{gramsToKilograms(weight)}kg</p>
          </div>
          <div>
            <h3 className="text-gray-400">Height</h3>
            <p className="text-orange-500">{cmToMeters(height)}m</p>
          </div>
          <div>
            <h3 className="text-gray-400">Sex</h3>
            <p className="text-orange-500">{sex}</p>
          </div>
          <div>
            <h3 className="text-gray-400">Matches</h3>
            <p className="text-orange-500">{height}</p>
          </div>
          <div>
            <h3 className="text-gray-400">Wins/Loses</h3>
            <p className="text-orange-500">
              {wins}/{loses}
            </p>
          </div>
          <div>
            <h3 className="text-gray-400 ">Total Time</h3>
            <p className="text-orange-500">1000h</p>
          </div>
        </div>

        {withDetails && (
          <div className="player-stats__titles mt-12">
            <h3 className="text-gray-400">Matches won</h3>
            {parsedWins.map(({ id, date, opponent }) => (
              <p key={id} className="text-orange-500">
                {date}, won a match against{" "}
                {`${opponent.firstname} ${opponent.lastname}`}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
