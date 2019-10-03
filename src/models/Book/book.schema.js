const Sequelize = require('sequelize');

const schema = {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  isbn: Sequelize.STRING,
  title: {
    type: Sequelize.STRING,
    required: true,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    defaultValue: null,
    required: true,
  },
  institutionId: Sequelize.BIGINT,
};

module.exports = {
  schema,
  tableName: 'books',
};
