const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  port: 3307,
  database: 'db_reset_password',
  username: 'username',
  password: 'password',
  dialect: 'mysql'
});

module.exports = {
  sequelize
}