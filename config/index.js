const env = process.env.env_node || 'development';

const config = require(`./${env}`);

module.exports = config;
