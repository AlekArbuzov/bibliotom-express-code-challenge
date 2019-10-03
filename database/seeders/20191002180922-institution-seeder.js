'use strict';

const { tableName } = require('../../src/models/Institution/institution.schema');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'Massachusetts Institute of Technology',
        url: 'student',
        email: 'Massachusetts@mit.com',
      },
      {
        name: 'Oxford University',
        url: 'student',
        email: 'Oxford@oxford.com',
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null);
  }
};
