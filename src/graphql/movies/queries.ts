import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query MyQuery($limit: Int, $offset: Int) {
    image(limit: $limit, offset: $offset) {
      id
      url
      programs {
        thumnail {
          programs {
            id
          }
        }
        name
      }
    }
  }
`;
