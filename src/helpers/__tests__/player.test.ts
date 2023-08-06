import { Match } from "../../types/matches";
import {
  calcWinAndLoses,
  cmToMeters,
  gramsToKilograms,
  parseWins,
} from "../player";

const matches = [
  {
    id: "match-1",
    players: [
      {
        id: "player-1",
        firstname: "Stan",
        lastname: "Wawrinka",
      },
      {
        id: "player-2",
        firstname: "Rafael",
        lastname: "Nadal",
      },
    ],
    winner: {
      id: "player-1",
    },
    startTime: "2022-01-31T07:12:00.000Z",
    endTime: "2022-01-31T16:33:00.000Z",
  },
  {
    id: "match-2",
    players: [
      {
        id: "player-1",
        firstname: "Stan",
        lastname: "Wawrinka",
      },
      {
        id: "player-2",
        firstname: "Rafael",
        lastname: "Nadal",
      },
    ],
    winner: {
      id: "player-2",
    },
    startTime: "2022-01-31T07:12:00.000Z",
    endTime: "2022-01-31T16:33:00.000Z",
  },
];

describe("players helpers", () => {
  describe("calcWinsAndLoses", () => {
    it("should return 1 win and 1 loses when player won a single match", () => {
      const result = calcWinAndLoses("player-1", matches as unknown as Match[]);
      expect(result).toEqual({ wins: 1, loses: 1 });
    });

    it("should throw an error when given a non-array value for the matches parameter", () => {
      expect(() =>
        parseWins("player1", "not an array" as unknown as Match[])
      ).toThrow("Array of matches is expected");
    });
  });

  describe("parseWins", () => {
    it("should return an empty array when given a valid player id and an empty array of matches", () => {
      const result = parseWins("player1", []);
      expect(result).toEqual([]);
    });

    it("should return an array of objects with id, date, and opponent properties when given a valid player id and an array of matches where the player won", () => {
      const result = parseWins("player-1", matches as unknown as Match[]);

      expect(result).toEqual([
        {
          id: "match-1",
          date: "31-1-2022",
          opponent: {
            id: "player-2",
            firstname: "Rafael",
            lastname: "Nadal",
          },
        },
      ]);
    });

    it("should throw an error when given a non-array value for the matches parameter", () => {
      expect(() =>
        parseWins("player1", "not an array" as unknown as Match[])
      ).toThrow("Array of matches is expected");
    });
  });

  describe("gramsToKilograms", () => {
    it("should return the weight in kilograms when a weight in grams is passed", () => {
      expect(gramsToKilograms(5000)).toBe(5);
      expect(gramsToKilograms(10000)).toBe(10);
      expect(gramsToKilograms(15000)).toBe(15);
    });

    it("should throw an error when given a negative input", () => {
      expect(() => gramsToKilograms(-5000)).toThrow(
        "Input should be a valid and positive number."
      );
    });

    it("should throw an error when passing a non-numeric value as input", () => {
      expect(() => gramsToKilograms("abc" as unknown as number)).toThrow();
    });
  });

  describe("cmToMeters", () => {
    it("should return the correct result when passing a valid number as input", () => {
      expect(cmToMeters(180)).toBe(1.8);
      expect(cmToMeters(200)).toBe(2);
      expect(cmToMeters(150)).toBe(1.5);
    });

    it("should throw an error when given a negative input", () => {
      expect(() => cmToMeters(-180)).toThrow(
        "Input should be a valid and positive number."
      );
    });

    it("should throw an error when passing a non-numeric value as input", () => {
      expect(() => cmToMeters("abc" as unknown as number)).toThrow();
    });
  });
});
