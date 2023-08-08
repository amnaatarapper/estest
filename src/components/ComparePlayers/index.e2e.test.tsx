import { ComparePlayers } from ".";
import { renderWithProviders, testClient } from "../../utils/tests";
import { screen } from "@testing-library/react";
import { GET_PLAYERS } from "../../services/players";

describe("<ComparePlayers /> simple E2E test", () => {
  it("should render two PlayerStats components when there are two players in the players array", async () => {
    testClient
      .query({
        query: GET_PLAYERS,
      })
      .then(() => {
        renderWithProviders(<ComparePlayers />);

        expect(screen.getAllByTitle("player stats")).toHaveLength(2);
      });
  });
});
