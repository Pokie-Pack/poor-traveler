import { gql } from "@apollo/client";

export const QUERY_TravelPackage = gql`
  {
    query allTravelPackage {
      travelpackage {
        location,
        climate,
        topography,
        airfare,
        transportation,
        lodging,
        activity,
        cost
        }
      }
    }
  }
`;
