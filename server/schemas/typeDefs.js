const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type travelPackage {
    _id: ID
    location: String,
    climate: String,
    topography: [String],  
    airfare: Boolean, 
    transportation: String, 
    lodging: String, 
    activity: [String], 
    cost: Float,
    travel Package: [TravelPackage]
  }

  type user {
    type User {
      _id: ID
      firstName: String
      lastName: String
      email: String
      password: String
    }
  }

  type Query {
    user: [User]
    travelPackage(activity: [String], location: String, climate: String, topography: String): [TravelPackage]
  }

  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
