const Sequelize = require('sequelize');

const schema = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
  },
  url: {
    type: Sequelize.STRING,
    defaultValue: null,
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    required: true,
  },
};

module.exports = {
  schema,
  tableName: 'institutions',
};
