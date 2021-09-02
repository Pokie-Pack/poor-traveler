import { gql } from "@apollo/client";

export const QUERY_TRAVELPACKAGE = gql`
  
    query allTravelPackage {
      travelPackage {
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
`;
