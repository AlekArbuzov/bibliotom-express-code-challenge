const Sequelize = require('sequelize');

const config = require('./config');

const { database, username, password, host, dialect } = config[process.env.NODE_ENV];

const db = new Sequelize(database, username, password, {
  host,
  dialect,
  define: { timestamps: false },
});

module.exports = db;
