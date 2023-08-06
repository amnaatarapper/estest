import { Match } from "../types/matches";
import { Player } from "../types/players";
import { calculateDurationInMinutes, formatDate } from "./date";

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

export const parseWins = (id: Player["id"], matches: Match[]) => {
  if (!Array.isArray(matches) || !matches) {
    throw new Error("Array of matches is expected");
  }

  const parsedWins = matches
    .filter((match) => match.winner.id === id)
    .map(({ startTime, players, id }) => ({
      id,
      date: formatDate(startTime),
      opponent: players.filter((player) => player.id !== id)[0],
    }));

  return parsedWins;
};

export const gramsToKilograms = (weightInGrams: number) => {
  if (typeof weightInGrams !== "number") {
    throw new Error("Input should be a number.");
  }

  return weightInGrams / 1000;
};

export const cmToMeters = (heightInCm: number) => {
  if (typeof heightInCm !== "number") {
    throw new Error("Input should be a number.");
  }

  return heightInCm / 100;
};
