const Location = require('../models/pg/Location');

exports.getAllLocations = async () => {
  return await Location.getAll();
};

exports.createLocation = async (name) => {
  return await Location.create(name);
};

exports.updateLocation = async (id, name) => {
  return await Location.update(id, name);
};

exports.deleteLocation = async (id) => {
  return await Location.delete(id);
};
