import { Player } from "./players";

export type Match = {
  id: string;
  players: Player[];
  winner: Player;
  startTime: string;
  endTime: string;
};

export type ParsedWin = {
  id: string;
  date: string;
  opponent: Player;
};
