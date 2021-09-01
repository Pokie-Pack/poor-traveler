const { AuthenticationError } = require("apollo-server-express");
const { User, TravelPackage } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        
        const user = await User.findById(context.user._id).populate("travelpackages");

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    travelPackages: async (parent, args, context) => {
      const query = { ...args };

      if (args.activity) {
        query["activity"] = { $all: args.activity };
      }
      return await TravelPackage.find(query);
    },
  },


  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
