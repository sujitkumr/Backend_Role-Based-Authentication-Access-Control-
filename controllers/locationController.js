const locationService = require('../services/locationService');
const { sendResponse } = require('../utils/responseUtil');

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await locationService.getAllLocations();
    sendResponse(res, 200, true, 'Locations fetched', { locations });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.createLocation = async (req, res) => {
  try {
    const location = await locationService.createLocation(req.body.name);
    sendResponse(res, 201, true, 'Location created', { location });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const updated = await locationService.updateLocation(req.params.id, req.body.name);
    if (!updated) return sendResponse(res, 404, false, 'Location not found');
    sendResponse(res, 200, true, 'Location updated', { location: updated });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    await locationService.deleteLocation(req.params.id);
    sendResponse(res, 200, true, 'Location deleted');
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
