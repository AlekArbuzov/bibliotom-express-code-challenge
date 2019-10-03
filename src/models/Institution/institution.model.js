const db = require('../../../database/connection');
const { tableName, schema } = require('./institution.schema');

const Institution = db.define(tableName, schema);

module.exports = Institution;
