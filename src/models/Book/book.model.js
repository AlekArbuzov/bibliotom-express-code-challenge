const db = require('../../../database/connection');
const { tableName, schema } = require('./book.schema');

module.exports = db.define(tableName, schema);
