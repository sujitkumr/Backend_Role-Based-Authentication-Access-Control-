const express = require('express');
const router = express.Router();

const locationController = require('../controllers/locationController');

// Get all locations
router.get('/', locationController.getAllLocations);

// Create a new location
router.post('/', locationController.createLocation);

// Update a location by id
router.put('/:id', locationController.updateLocation);

// Delete a location by id
router.delete('/:id', locationController.deleteLocation);

module.exports = router;
