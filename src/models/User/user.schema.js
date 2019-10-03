const Sequelize = require('sequelize');

const schema = {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM('student', 'academic', 'administrator'),
    defaultValue: null,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  institutionId: Sequelize.BIGINT,
};

module.exports = {
  schema,
  tableName: 'users',
};
