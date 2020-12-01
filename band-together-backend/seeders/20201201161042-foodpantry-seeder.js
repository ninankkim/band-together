'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'FoodPantries',
      [

          {
            "name": "House of Amos",
            "address": "8030 Boone Rd, Houston TX 77072",
            "latitude": 29.6903792,
            "longitude": -95.5752149,
            "phone_number": 2814959061,
            "hours": "M-Th 9 AM - 11:45 AM, Sat 10 AM - 11:15 AM",
            "church_affiliated": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Alvin Community Food Pantry",
            "address": "1212 S. Durant St, Alvin TX 77511",
            "latitude": 29.4129505,
            "longitude": -95.2537941,
            "phone_number": 2818248871,
            "hours": "Unlisted",
            "church_affiliated": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Gulf Coast Community Services Association",
            "address": "9320 Kirby Dr, Houston TX 77054",
            "latitude": 29.6710252,
            "longitude": -95.4137911,
            "phone_number": 7133934700,
            "hours": "M-F 9 AM - 12 PM, 1 PM - 5 PM",
            "church_affiliated": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "A Touch of God's Love Outreach",
            "address": "10103 Fondren Rd #420, Houston TX 77096",
            "latitude": 29.6690474,
            "longitude": -95.5080176,
            "phone_number": 3467018094,
            "hours": "M,T, Th 10 AM - 2 PM, W 3 PM - 6 PM",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Westbury Church of Christ",
            "address": "100424 Hillcroft St, Houston TX 77096",
            "latitude": 29.6738059,
            "longitude": -95.4931456,
            "phone_number": 7137297880,
            "hours": "Sat 10 AM - 12 PM, 1 visit allowed/month",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Braes Interfaith Ministries",
            "address": "4300 W Bellfort Blvd, Houston TX 77035",
            "latitude": 29.6735414,
            "longitude": -95.4486293,
            "phone_number": 7137232671,
            "hours": "M, W, F 10 AM - 2 PM",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "St. Bernadette Catholic Church",
            "address": "15500 El Camino Real, Houston TX 77062",
            "latitude": 29.5679911,
            "longitude": -95.13376,
            "phone_number": 2814860337,
            "hours": "T, W, Th 9:30 AM - 11:30 AM",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Sacred Heart Catholic Church",
            "address": "109 N Frazier St, Conroe TX 77301",
            "latitude": 30.3088845,
            "longitude": -95.4611127,
            "phone_number": 9367568186,
            "hours": "M 10 AM - 3 PM",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Montgomery County Food Bank",
            "address": "1 Food For Life Way, Conroe TX 77385",
            "latitude": 30.2171419,
            "longitude": -95.4447766,
            "phone_number": 9362718800,
            "hours": "M-Th 8 AM - 5 PM",
            "church_affiliated": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "First Christian Church Conroe",
            "address": "3500 N Loop 336 W, Conroe TX 77304",
            "latitude": 30.3160087,
            "longitude": -95.5050848,
            "phone_number": 9367563554,
            "hours": "W 9 AM - 11:45 AM",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Tamina Community Center",
            "address": "18955 Main St, Conroe TX 77385",
            "latitude": 30.1809091,
            "longitude": -95.4418189,
            "phone_number": 2814654646,
            "hours": "M - F 3 PM - 6 PM",
            "church_affiliated": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Cypress Houston Food Pantries",
            "address": "11202 Huffmeister Rd #5, Houston TX 77065",
            "latitude": 29.9379309,
            "longitude": -95.6280932,
            "phone_number": 2819557684,
            "hours": "T 9:30 AM - 5 PM, F 9:30 AM - 3 PM (other hours with appointment)",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "Gods Storehouse - Fountain of Life Fellowship",
            "address": "15010 Mueschke Rd, Cypress TX 77433",
            "latitude": 29.9949141,
            "longitude": -95.7225369,
            "phone_number": 2813739337,
            "hours": "M 6 - 8 PM, June-August 3:30 PM - 6 PM",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "St Hyacinthh Catholic Church",
            "address": "2921 Center St, Deer Park TX 77536",
            "latitude": 29.6852195,
            "longitude": -95.1219538,
            "phone_number": 2814794298,
            "hours": "M, W, F 1 PM - 2:30 PM",
            "church_affiliated": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "name": "M.I. Lewis Social Services",
            "address": "215 FM 517 E, Dickinson TX 77539",
            "latitude": 29.4507196,
            "longitude": -95.0756784,
            "phone_number": 2815342043,
            "hours": "T-F 8:30 AM - 1 PM, 6 times allowed/year",
            "church_affiliated": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
          }
        
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
