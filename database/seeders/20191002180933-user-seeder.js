'use strict';

const { tableName } = require('../../src/models/User/user.schema');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'test',
        email: 'test@mit.com',
        role: 'student',
        password: '$2a$10$nkmsAkrgZbUeO313KseaHe6B8dHyyQbyjvdMvw1UjoZ4xxfJgeHLe', // password: 1233452
        institutionId: 1,
      }
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null);
  }
};
