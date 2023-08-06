import { ComparePlayers } from ".";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithProviders } from "../../utils/test";
import { players } from "../../utils/mocks/players";
import { Player } from "../../types/players";

it("should render two PlayerStats components when there are two players in the players array", () => {
  const { debug } = renderWithProviders(<ComparePlayers />, {
    preloadedState: {
      players: {
        players: players as Player[],
      },
    },
  });
  debug();
  expect(screen.getAllByTitle("player stats")).toHaveLength(2);
});
