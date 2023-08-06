import { gql } from "@apollo/client";

export const GET_PLAYERS = gql`
  query GetPlayers {
    players {
      id
      firstname
      lastname
      shortname
      sex
      picture {
        url
      }
      country {
        code
      }
      stats {
        rank
        points
        weight
        height
        age
      }
    }
  }
`;
