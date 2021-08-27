const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type travelPackage {
    _id: ID
    location: String,
    climate: [String],
    topography: [String],
    airfare: Boolean,
    transportation: String,
    lodging: String,
    activity: [String],
    cost: Number,
  }

  type user {
    _id: ID
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  }

  type Query {
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
