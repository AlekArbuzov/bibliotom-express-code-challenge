const db = require('../../../database/connection');
const { tableName, schema } = require('./user.schema');

module.exports = db.define(tableName, schema);
