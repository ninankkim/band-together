'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'DonationCenter',
      [
        {
          "name": "Salvation Army Family Store & Donation Center",
          "address": "2208 Washington Ave, Houston TX 77007",
          "phone_number": 72138693551,
          "hours": "W, Th, Sat 9 AM - 6 PM",
          "category": "All"
        },
        {
          "name": "Fort Bend Women's Center PennyWise Resale Store",
          "address": "323 S. Mason Rd, Katy TX 77450",
          "phone_number": 2813445777,
          "hours": "M-Sat 9:30 AM - 5 PM, Sun 12 PM - 5 PM",
          "category": "All"
        },
        {
          "name": "Goodwill Houston Donation Center - River Oaks",
          "address": "2318 A S Shepherd, Houston TX 77019",
          "phone_number": 7135293659,
          "hours": "M-Sun 10 AM - 6 PM",
          "category": "All"
        },
        {
          "name": "Goodwill Houston Donation Center",
          "address": "8721 Stella Link Rd, Houston TX 77025",
          "phone_number": 7132189886,
          "hours": "M-Sun 10 AM - 6 PM",
          "category": "All"
        },
        {
          "name": "Goodwill Houston Donation Center",
          "address": "2428 W Holcombe Blvd, Houston TX 77030",
          "phone_number": 7136611270,
          "hours": "M-Sun 10 AM - 6 PM",
          "category": "All"
        },
        {
          "name": "Salvation Army Family Store & Donation Center",
          "address": "8145 Highway 6 S Houston TX 77083",
          "phone_number": 2815301007,
          "hours": "M-Sun 10 AM - 6 PM",
          "category": "All"
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
