'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'demouser1@user.io',
                username: 'demouser1',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                email: 'demouser2@user.io',
                username: 'demouser2',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                email: 'demouser3@user.io',
                username: 'demouser3',
                hashedPassword: bcrypt.hashSync('password')
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete('Users', {
            username: { [Op.in]: ['demouser1', 'demouser2', 'demouser3'] }
        }, {});
    }
};
