const { mongoose } = require('mongoose');

const librarySchema = mongoose.Schema(
  {
    gameName: String,
    genre: Array,
  },
  {
    timestamps: true,
  },
);

librarySchema.methods.toJSON = function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
};

const gameLibraryModel = mongoose.model('manajemen-game', librarySchema);
module.exports = { gameLibraryModel };
