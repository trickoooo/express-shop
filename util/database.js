const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs-ecommerce', 'root', '', 
{
  dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;
