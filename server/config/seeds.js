const db = require("./connection");
const { User, TravelPackage } = require("../models");

db.once("open", async () => {
  await TravelPackage.deleteMany();

  const travelPackages = await TravelPackage.insertMany([
    {
      location: 'Seattle',
      climate: 'Chilly',
      topography: "Coastal",
      airfare: true,
      transportation: "Car",
      lodging: "Hotel",
      activity: ["Bike Rental", "Guided Tour", "Nature Hike", "Whale Watching", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Catalina Island',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Cruise",
      lodging: "B&B",
      activity: ["Guided Tour", "Whale Watching", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Arizona',
      climate: 'Warm',
      topography: 'Inland',
      airfare: true,
      transportation: "Car",
      lodging: "Hotel",
      activity: ["Bike Rental", "Nature Hike", "Rafting", "Dune-Buggying"],
      cost: '3999.99'
    },
    {
      location: 'Montana',
      climate: "Warm",
      topography: "Inland",
      airfare: true,
      transportation: "RV",
      lodging: "B&B",
      activity: ["Guided Tour", "Nature Hike", "Rafting", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Washington DC',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Car",
      lodging: "Hotel",
      activity: ["Bike Rental", "Guided Tour", "Nature Hike", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Hawaii',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Car",
      lodging: "Hotel",
      activity: ["Nature Hike", "Surfing Lesson", "Snorkeling", "Whale Watching", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Thailand',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Cruise",
      lodging: "Hotel",
      activity: ["Surfing Lesson", "Rafting", "Snorkeling", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Australia',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Car",
      lodging: "B&B",
      activity: ["Boat Rental", "Surfing Lesson", "Snorkeling", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Iceland',
      climate: 'Chilly',
      topography: "Coastal",
      airfare: true,
      transportation: "Car",
      lodging: "B&B",
      activity: ["Bike Rental", "Nature Hike", "Whale Watching", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'French Riviera',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Cruise",
      lodging: "Hotel",
      activity: ["Bike Rental", "Boat Rental", "Guided Tour", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Yucatan',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Cruise",
      lodging: "Hotel",
      activity: ["Guided Tour", "Nature Hike", "Surfing Lesson", "Snorkeling", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Alaska',
      climate: 'Chilly',
      topography: "Mountain",
      airfare: true,
      transportation: "Cruise",
      lodging: "B&B",
      activity: ["Ski Rental", "Skiing Lesson", "Whale Watching", "Mountain Expedition", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Aspen',
      climate: 'Chilly',
      topography: "Mountain",
      airfare: true,
      transportation: "Car",
      lodging: "Hotel",
      activity: ["Ski Rental", "Skiing Lesson", "Nature Hike", "Mountain Expedition"],
      cost: '3999.99'
    },
    {
      location: 'Munich',
      climate: 'Chilly',
      topography: "Mountain",
      airfare: true,
      transportation: "RV",
      lodging: "Hostel",
      activity: ["Ski Rental", "Skiing Lesson", "Rafting", "Mountain Expedition", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Tokyo',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Car",
      lodging: "Hotel",
      activity: ["Bike Rental", "Guided Tour", "Nature Hike", "Surfing Lesson", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Hong Kong',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Cruise",
      lodging: "Hotel",
      activity: ["Bike Rental", "Boat Rental", "Guided Tour", "Nature Hike", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Fiji',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Cruise",
      lodging: "B&B",
      activity: ["Bike Rental", "Nature Hike", "Surfing Lesson", "Snorkeling", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Dubai',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Car",
      lodging: "Hotel",
      activity: ["Bike Rental", "Boat Rental", "Charter Fishing", "Dune-Buggying"],
      cost: '3999.99'
    },
    {
      location: 'Greece',
      climate: 'Warm',
      topography: "Beach",
      airfare: true,
      transportation: "Cruise",
      lodging: "Hostel",
      activity: ["Bike Rental", "Boat Rental", "Guided Tour", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Egypt',
      climate: 'Warm',
      topography: 'Inland',
      airfare: true,
      transportation: 'Car',
      lodging: "Hotel",
      activity: ["Guided Tour", "Barbecue/Cookout", "Dune-Buggying"],
      cost: '3999.99'
    }
  ]);

  console.log('travelPackages seeded');

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
