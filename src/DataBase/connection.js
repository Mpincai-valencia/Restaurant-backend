const {Sequelize} = require('sequelize');

var dataBase = 'restaurantDB';
var userName = 'postgres';
var password = 'Marianaing25';
const connection = new Sequelize(dataBase, userName, password, {
    host: 'localhost',
    dialect: 'postgres',
    port: '8080'
});

module.exports= connection;