'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Shelters',
      [
        {
          name: "Magnificat Houses Men's Shelter",
          address: '3209 Austin St, Houston TX 77004',
          latitude: 29.7390001,
          longitude: -95.3737331,
          phone_number: 7135194321,
          hours: '3:30-4:30 PM',
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salvation Army's Star of Hope",
          address: '171 Congress, Houston TX 77002',
          latitude: 29.7598994,
          longitude: -95.3568475,
          phone_number: 7132238889,
          hours: '8 AM-11 AM, 1 PM-3 PM',
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Open Door Mission',
          address: '5803 Harrisburg Blvd, Houston TX 77011',
          latitude: 29.7407579,
          longitude: -95.3166834,
          phone_number: 7139217520,
          hours: 'M-W 6-10 AM',
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Salvation Army Conroe',
          address: '304 Ave E, Conroe TX 77301',
          latitude: 30.3095813,
          longitude: -95.4530055,
          phone_number: 9367602440,
          hours: null,
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Modest Family',
          address: '1008 Danube St, Houston TX 77051',
          latitude: 29.6793922,
          longitude: -95.3638802,
          phone_number: 7137332458,
          hours: null,
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bay Area Homeless Britton-Fuller Family Center',
          address: '3406 Wisconsin St, Baytown TX 775522',
          latitude: 29.7294493,
          longitude: -95.0083808,
          phone_number: 2818371654,
          hours: 'Screening by phone',
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bay Area Homeless Emergency Shelter',
          address: '3406 Wisconsin St, Baytown TX 775522',
          latitude: 29.7294493,
          longitude: -95.0083808,
          phone_number: 2818371654,
          hours: 'Screening by phone',
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Family Promise of Montgomery County - Conroe',
          address: '1207 Thompson Ave, Conroe TX 77301',
          latitude: 30.3199341,
          longitude: -95.4583897,
          phone_number: 9364418778,
          hours: 'Screening by phone',
          lgbtFriendly: false,
          women_and_children: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Family Promise of Lake Houston - Humble',
          address: '111 S. Ave G, Humble TX 77338',
          latitude: 29.9958793,
          longitude: -95.2596902,
          phone_number: 2814413754,
          hours: 'M-F 7 AM - 5 PM',
          lgbtFriendly: false,
          women_and_children: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Family Promise of Clear Creek - League City',
          address: '1101 S. Egret Bay Blvd Building B, League City TX 77573',
          latitude: 29.5132722,
          longitude: -95.0712555,
          phone_number: 8329323963,
          hours: 'M-F',
          lgbtFriendly: false,
          women_and_children: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sarah's House",
          address: '711 Perla Road, Pasadena TX 77502',
          latitude: 29.6738114,
          longitude: -95.2017958,
          phone_number: 7134751480,
          hours: 'Screening by phone',
          lgbtFriendly: false,
          women_and_children: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Star of Hope Women & Family Development Center',
          address: '2575 Reed Rd, Houston TX 77051',
          latitude: 29.6597031,
          longitude: -95.392316,
          phone_number: 7137480700,
          hours: null,
          lgbtFriendly: false,
          women_and_children: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Doris and Carloss Morris Men's Development Center",
          address: '1811 Ruiz Houston, TX 77002',
          latitude: 29.7605574,
          longitude: -95.351495,
          phone_number: 7132778900,
          hours: null,
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mission of Yahweh',
          address: '10247 Algiers Rd, Houston TX 77041',
          latitude: 29.8451072,
          longitude: -95.5471885,
          phone_number: 7134664785,
          hours: null,
          lgbtFriendly: false,
          women_and_children: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Madge Bush Transitional Living Center',
          address: '3410 Drew St, Houston TX 77004',
          latitude: 29.7317112,
          longitude: -95.3520672,
          phone_number: 7136523830,
          hours: null,
          lgbtFriendly: false,
          women_and_children: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
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
