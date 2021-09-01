import { gql } from "@apollo/client";

export const QUERY_TRAVELPACKAGE = gql`
    query allTRAVELPACKAGE {
      travelpackage {
        _id
        location
        climate
        topography
        airfare
        transportation
        lodging
        activity
        cost
        }
      }
`;
