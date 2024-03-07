const connection=require('./connection');

//Models
const restaurant=require('../Models/restaurant');
const product= require('../Models/product');
const department= require('../Models/department');
const city=require('../Models/city');
//JSON
const departmentjson= require('./jsonfiles/departmentjson');
const cityjson= require('./jsonfiles/cityjson');
function sync(){
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant, {
        foreignKey: 'restaurantId'
    });

    department.hasMany(city,{
        foreignKey:'departmentId',
        onDelete:'restrict',
        onUpdate:'cascade'
    });
    product.belongsTo(department,{
        foreignKey:'departmentId'
    })

    //Foreing key city-restaurant
    city.hasMany(restaurant,{
        foreignKey:'cityId',
        onDelete:'restrict',
        onUpdate:'cascade'
    });
    restaurant.belongsTo(city,{
        foreignKey:'cityId'
    });

    //create json 
    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();