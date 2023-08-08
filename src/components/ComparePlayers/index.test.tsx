import { ComparePlayers } from ".";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/tests";
import { players } from "../../utils/tests/mocks/players";
import { Player } from "../../types/players";

describe("<ComparePlayers />", () => {
  it("should render two PlayerStats components when there are two players in the players array", () => {
    renderWithProviders(<ComparePlayers />, {
      preloadedState: {
        players: {
          players: players as Player[],
        },
      },
    });

    expect(screen.getAllByTitle("player stats")).toHaveLength(2);
  });
});
