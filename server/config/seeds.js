const db = require("./connection");
const { User, TravelPackage, Climate, Topography, Airfare, Transportation, Lodging, Activity } = require("../models");

db.once("open", async () => {
  // await Climate.deleteMany();

  // const climate = await Climate.insertMany([
  //   { name: 'Warm' },
  //   { name: 'Chilly' }
  // ]);

  // console.log('climates seeded');

  // await Topography.deleteMany();

  // const topography = await Topography.insertMany([
  //   { name: 'Beach' },
  //   { name: 'Inland' },
  //   { name: 'Mountain' },
  //   { name: 'Coastal' }
  // ]);

  // console.log('topographies seeded');

  // await Airfare.deleteMany();

  // // Unsure about seeding the boolean
  // const airfare = await Airfare.boolean([
  //   { name: 'Yes' },
  //   { name: 'No' },
  // ]);

  // console.log('airfares seeded');

  // await Transportation.deleteMany();

  // const transportation = await Transportation.insertMany([
  //   { name: 'Car' },
  //   { name: 'Cruise' },
  //   { name: 'RV' }
  // ]);

  // console.log('transportations seeded');

  // await Lodging.deleteMany();

  // const lodging = await Lodging.insertMany([
  //   { name: 'Hotel' },
  //   { name: 'Hostel' },
  //   { name: 'B&B' }
  // ]);

  // console.log('lodgings seeded');

  // await Activity.deleteMany();

  // const activity = await Activity.insertMany([
  //   { name: 'Bike Rental' }, //0
  //   { name: 'Ski Rental' }, //1
  //   { name: 'Boat Rental' }, //2
  //   { name: 'Guided Tour' }, //3
  //   { name: 'Nature Hike' }, //4
  //   { name: 'Surfing Lesson' }, //5
  //   { name: 'Skiing Lesson' }, //6
  //   { name: 'Rafting' }, //7
  //   { name: 'Snorkeling' }, //8
  //   { name: 'Whale Watching' }, //9
  //   { name: 'Mountain Expedition' }, //10
  //   { name: 'Charter Fishing' }, //11
  //   { name: 'Barbecue/Cookout' }, //12
  //   { name: 'Dune-Buggying' }, //13
  //   { name: '' },
  //   { name: '' },
  // ]);

  // console.log('activities seeded');


  await TravelPackage.deleteMany();

  const travelPackages = await TravelPackage.insertMany([
    {
      location: 'Seattle',
      climate: 'Chilly',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise", "RV"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Guided Tour", "Nature Hike", "Whale Watching", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Catalina Island',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise"],
      lodging: ["Hotel", "B&B"],
      activity: ["Guided Tour", "Whale Watching", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Arizona',
      climate: 'Warm',
      topography: 'Inland',
      airfare: true,
      transportation: ["Car", "RV"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Nature Hike", "Rafting", "Dune-Buggying"],
      cost: '3999.99'
    },
    {
      location: 'Montana',
      climate: ["Warm", "Chilly"],
      topography: ["Inland", "Mountain"],
      airfare: true,
      transportation: ["Car", "RV"],
      lodging: ["Hotel", "B&B"],
      activity: ["Guided Tour", "Nature Hike", "Rafting", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Washington DC',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "RV"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Guided Tour", "Nature Hike", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Hawaii',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise", "RV"],
      lodging: ["Hotel", "B&B"],
      activity: ["Nature Hike", "Surfing Lesson", "Snorkeling", "Whale Watching", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Thailand',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Surfing Lesson", "Rafting", "Snorkeling", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Australia',
      climate: 'Warm',
      topography: ["Beach", "Coastal", "Inland"],
      airfare: true,
      transportation: ["Car", "Cruise", "RV"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Boat Rental", "Surfing Lesson", "Snorkeling", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Iceland',
      climate: 'Chilly',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise", "RV"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Nature Hike", "Whale Watching", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'French Riviera',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Boat Rental", "Guided Tour", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Yucatan',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise"],
      lodging: ["Hotel", "B&B"],
      activity: ["Guided Tour", "Nature Hike", "Surfing Lesson", "Snorkeling", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Alaska',
      climate: 'Chilly',
      topography: ["Beach", "Coastal", "Mountain"],
      airfare: true,
      transportation: ["Car", "Cruise", "RV"],
      lodging: ["Hotel", "B&B"],
      activity: ["Ski Rental", "Skiing Lesson", "Whale Watching", "Mountain Expedition", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Aspen',
      climate: 'Chilly',
      topography: ["Mountain", "Inland"],
      airfare: true,
      transportation: ["Car", "RV"],
      lodging: ["Hotel", "B&B"],
      activity: ["Ski Rental", "Skiing Lesson", "Nature Hike", "Mountain Expedition"],
      cost: '3999.99'
    },
    {
      location: 'Munich',
      climate: 'Chilly',
      topography: ["Mountain", "Inland"],
      airfare: true,
      transportation: ["Car", "RV"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Ski Rental", "Skiing Lesson", "Rafting", "Mountain Expedition", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Tokyo',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Guided Tour", "Nature Hike", "Surfing Lesson", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Hong Kong',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Boat Rental", "Guided Tour", "Nature Hike", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Fiji',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise"],
      lodging: ["Hotel", "B&B"],
      activity: ["Bike Rental", "Nature Hike", "Surfing Lesson", "Snorkeling", "Charter Fishing"],
      cost: '3999.99'
    },
    {
      location: 'Dubai',
      climate: 'Warm',
      topography: ["Beach", "Coastal", "Inland"],
      airfare: true,
      transportation: ["Car", "Cruise"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Boat Rental", "Charter Fishing", "Dune-Buggying"],
      cost: '3999.99'
    },
    {
      location: 'Greece',
      climate: 'Warm',
      topography: ["Beach", "Coastal"],
      airfare: true,
      transportation: ["Car", "Cruise", "RV"],
      lodging: ["Hotel", "Hostel", "B&B"],
      activity: ["Bike Rental", "Boat Rental", "Guided Tour", "Charter Fishing", "Barbecue/Cookout"],
      cost: '3999.99'
    },
    {
      location: 'Egypt',
      climate: 'Warm',
      topography: 'Inland',
      airfare: true,
      transportation: 'Car',
      lodging: ["Hotel", "Hostel", "B&B"],
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
