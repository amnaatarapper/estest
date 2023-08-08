import { Match, ParsedWin } from "../types/matches";
import { Player } from "../types/players";
import { calculateDurationInHours, formatDate } from "./date";

export const calcWinAndLoses = (
  id: Player["id"],
  matches: Match[]
): { wins: number; loses: number } => {
  if (!Array.isArray(matches) || !matches) {
    throw new Error("Array of matches is expected");
  }

  const wins = matches.filter((match) => match.winner.id === id).length;
  const loses = matches.length - wins;

  return { wins, loses };
};

export const findMatchesByPlayerId = (
  id: Player["id"],
  matches: Match[]
): Match[] => {
  return matches.filter((match) => {
    return match.players.some((player) => player.id === id);
  });
};

export const calcTotalPlaytimeInHours = (
  id: Player["id"],
  matches: Match[]
): number => {
  return findMatchesByPlayerId(id, matches).reduce(
    (acc, { startTime, endTime }) =>
      acc + calculateDurationInHours(startTime, endTime),
    0
  );
};

export const parseWins = (id: Player["id"], matches: Match[]): ParsedWin[] => {
  if (!Array.isArray(matches) || !matches) {
    throw new Error("Array of matches is expected");
  }

  const parsedWins = matches
    .filter((match) => match.winner.id === id)
    .map(({ startTime, players, id: matchId }) => ({
      id: matchId,
      date: formatDate(startTime),
      opponent: players.filter((player) => player.id !== id)[0],
    }));

  return parsedWins;
};

export const gramsToKilograms = (weightInGrams: number): number => {
  if (typeof weightInGrams !== "number" || weightInGrams < 0) {
    throw new Error("Input should be a valid and positive number.");
  }

  return weightInGrams / 1000;
};

export const cmToMeters = (heightInCm: number): number => {
  if (typeof heightInCm !== "number" || heightInCm < 0) {
    throw new Error("Input should be a valid and positive number.");
  }

  return heightInCm / 100;
};
