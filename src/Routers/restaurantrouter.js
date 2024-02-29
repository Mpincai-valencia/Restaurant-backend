const express = require('express');
const restaurantcontroller = require('../Controllers/restaurantcontroller')
const router= express.Router();

router.post('/createrestaurant', restaurantcontroller.createRestaurant);
router.post('/listrestaurant', restaurantcontroller.listRestaurant);
router.post('/updaterestaurant/:restaurantId',restaurantcontroller.updateRestaurant);
router.post('/disablerestaurant/restaurantId',restaurantcontroller.disableRestaurant);

module.exports= router;