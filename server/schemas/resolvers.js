const { AuthenticationError } = require("apollo-server-express");
const { User, TravelPackage } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
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

  Query: {
    TravelPackage: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return await TravelPackage.find({warm, chilly}).populate('beach', 'inland', 'mountain', 'coastal')
      },
    warm: async () => {
      // Populate the professor subdocument when querying for classes
      return await Class.find({beach, inland}).populate('location','climate', 'topography', 'airfare', ' transportation', 'lodging', ['activity'], cost )
    },
    chilly: async () => {
      return await Professor.find({mountain, coastal}).populate('location','climate', 'topography', 'airfare', ' transportation', 'lodging', ['activity'], cost)
    },
  },
};

module.exports = resolvers;
