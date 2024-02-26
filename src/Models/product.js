const {Model, DataTypes}= require('sequelize');
const connection = require('../DataBase/connection');
const restaurant = require('./restaurant');

class product extends Model{

}
product.init({
    productId:{
        type: DataTypes.STRING,
        primaryKey:true,
        allowNull: false
    },
    productName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    productDescription:{
        type: DataTypes.STRING,
        allowNull:false
    },
    productPrice:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
    restaurantId:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
    sequelize:connection,
    modelName: 'product',
    paranoid: true,
    deletedAt: 'destroyTime'
});