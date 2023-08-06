import { gql } from "@apollo/client";

export const GET_MATCHES = gql`
  query GetMatches {
    matches {
      id
      players {
        id
        firstname
        lastname
      }
    }
  }
`;
