'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Shelters',
      [
        
          [
            {
              "name": "Magnificat Houses Men's Shelter",
              "address": "3209 Austin St, Houston TX 77004",
              "phone_number": 7135194321,
              "hours": "3:30-4:30 PM",
              "lgbtFriendly":false,
              "women_and_children": false,
            },
            {
              "name": "Salvation Army's Star of Hope",
              "address": "171 Congress, Houston TX 77002",
              "phone_number": 7132238889,
              "hours": "8 AM-11 AM, 1 PM-3 PM",
              "lgbtFriendly":false,
              "women_and_children": false,
            },
            {
              "name": "Open Door Mission",
              "address": "5803 Harrisburg Blvd, Houston TX 77011",
              "phone_number": 7139217520,
              "hours": "M-W 6-10 AM",
              "lgbtFriendly":false,
              "women_and_children": false,
            },
            {
              "name": "Salvation Army Conroe",
              "address": "304 Ave E, Conroe TX 77301",
              "phone_number": 9367602440,
              "hours": "Unavailable",
              "lgbtFriendly":false,
              "women_and_children": false,
            },
            {
              "name": "Modest Family",
              "address": "1008 Danube St, Houston TX 77051",
              "phone_number": 7137332458,
              "hours": "Unavailable",
              "lgbtFriendly":false,
              "women_and_children": false,
            },
            {
              "name": "Bay Area Homeless Britton-Fuller Family Center",
              "address": "3406 Wisconsin St, Baytown TX 775522",
              "phone_number": 2818371654,
              "hours": "Screening by phone",
              "lgbtFriendly":false,
              "women_and_children": false,
            },
            {
              "name": "Bay Area Homeless Emergency Shelter",
              "address": "3406 Wisconsin St, Baytown TX 775522",
              "phone_number": 2818371654,
              "hours": "Screening by phone",
              "lgbtFriendly":false,
              "women_and_children": false,
            },
            {
              "name": "Family Promise of Montgomery County - Conroe",
              "address": "1207 Thompson Ave, Conroe TX 77301",
              "phone_number": 9364418778,
              "hours": "Screening by phone",
              "lgbtFriendly":false,
              "women_and_children": true,

            },
            {
              "name": "Family Promise of Lake Houston - Humble",
              "address": "111 S. Ave G, Humble TX 77338",
              "phone_number": 2814413754,
              "hours": "M-F 7 AM - 5 PM",
              "lgbtFriendly":false,
              "women_and_children": true,

            },
            {
              "name": "Family Promise of Clear Creek - League City",
              "address": "1101 S. Egret Bay Blvd Building B, League City TX 77573",
              "phone_number": 8329323963,
              "hours": "M-F",
              "lgbtFriendly":false,
              "women_and_children": true,

            },
            {
              "name": "Sarah's House",
              "address": "711 Perla Road, Pasadena TX 77502",
              "phone_number": 7134751480,
              "hours": "Screening by phone",
              "lgbtFriendly":false,
              "women_and_children": true,

            },
            {
              "name": "Star of Hope Women & Family Development Center",
              "address": "2575 Reed Rd, Houston TX 77051",
              "phone_number": 7137480700,
              "hours": "Unavailable",
              "lgbtFriendly":false,
              "women_and_children": true,

            },
            {
              "name": "Doris and Carloss Morris Men's Development Center",
              "address": "1811 Ruiz Houston, TX 77002",
              "phone_number": 7132778900,
              "hours": "Unavailable",
              "lgbtFriendly":false,
              "women_and_children": false,
            },
            {
              "name": "Mission of Yahweh",
              "address": "10247 Algiers Rd, Houston TX 77041",
              "phone_number": 7134664785,
              "hours": "Unavailable",
              "lgbtFriendly":false,
              "women_and_children": true,

            },
            {
              "name": "Madge Bush Transitional Living Center",
              "address": "3410 Drew St, Houston TX 77004",
              "phone_number": 7136523830,
              "hours": "Unavailable",
              "lgbtFriendly": false,
              "women_and_children": false,
            },
          ]
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
