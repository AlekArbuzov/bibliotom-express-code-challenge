'use strict';

const { schema, tableName } = require('../../src/models/User/user.schema');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable(tableName, schema);
  },

  down: (queryInterface) => {
    return queryInterface.dropTable(tableName);
  }
};
