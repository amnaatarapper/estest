import { useState } from "react";
import { Player } from "../../types/players";
import { useAppSelector } from "../../redux/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import {
  calcWinAndLoses,
  cmToMeters,
  gramsToKilograms,
} from "../../helpers/player";

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

  return (
    <div
      className={`player-stats ${withDetails ? "with-details" : ""}`}
      onClick={() => setWithDetails(!withDetails)}
    >
      <div className="player-stats__content">
        <div className="player-stats__header">
          <img
            className="player-stats__picture"
            src={picture.url}
            alt={`${firstname} ${lastname} picture`}
          />

          <h2 className="player-stats__name">
            <span
              className="player-stats__firstname"
              data-firstname={firstname}
            >
              {firstname}
            </span>
            <span className="player-stats__lastname">{lastname}</span>
          </h2>

          <div className="player-stats__country">
            <img src={country.picture.url} alt="country" />
            <span className="player-stats__country-name">{country.code}</span>
          </div>
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
              <h5 className="subtitle">Country</h5>
              <p className="text">{country.code}</p>
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
          </div>

          {withDetails && (
            <div className="player-stats__titles">
              <h5 className="subtitle">Matches won details</h5>
              <div className="player-stats__title-year">
                <p className="text">
                  2021 <span>- 5</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Indoor/Hard)</li>
                  <li>Wimbledon (Outdoor/Grass)</li>
                  <li>Roland Garros (Outdoor/Clay)</li>
                  <li>Belgrade 2 (Outdoor/Clay)</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
              <div className="player-stats__title-year">
                <p className="text">
                  2020 <span>- 4</span>
                </p>
                <ul>
                  <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                  <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                  <li>Dubai Outdoor/Hard</li>
                  <li>Australian Open (Outdoor/Hard)</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
