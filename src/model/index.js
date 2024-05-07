const { mongoose } = require('mongoose');
const { gameLibraryModel } = require('./gameLibrary');
const { usersModel } = require('./Users');
const { dbConfig } = require('../config/databaseConfig');

const configModel = {
  mongoose,
  url: dbConfig.url,
  gameLibrary: gameLibraryModel,
  users: usersModel, // model untuk auth
};

module.exports = { configModel };
