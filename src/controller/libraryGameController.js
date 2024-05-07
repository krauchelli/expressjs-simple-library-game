// const { nanoid } = require('nanoid');
const { configModel } = require('../model/index');

const gameLibraryModel = configModel.gameLibrary;

const getAllLibraries = async (req, res) => {
  try {
    const gameLib = await gameLibraryModel.find();
    console.log(gameLib);
    return res.status(200).json({
      message: 'success',
      data: gameLib,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// eslint-disable-next-line consistent-return
const getSpecificLibrary = async (req, res) => {
  try {
    const gameLib = await gameLibraryModel.findById(req.params.id);

    if (!gameLib) {
      return res.status(404).json({
        message: 'game not found!',
      });
    }

    return res.status(200).json({
      message: 'success',
      data: gameLib,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addLibrary = async (req, res) => {
  const gameLib = req.body;
  // eslint-disable-next-line new-cap
  const newGameLib = new gameLibraryModel(gameLib);
  try {
    await newGameLib.save();
    return res.status(201).json({
      message: 'success',
      data: newGameLib,
    });
  } catch (error) {
    return res.status(409).json({
      message: error.message,
    });
  }
};

const editSpecificLibrary = async (req, res) => {
  try {
    const data = req.body;
    const gameLib = await gameLibraryModel.findById(req.params.id);

    if (gameLib) {
      gameLib.gameName = data.gameName;
      gameLib.gameId = data.gameId;
      gameLib.genre = data.genre;

      const editLib = await gameLib.save();
      return res.status(200).json({
        message: 'success',
        data: editLib,
      });
    }
    return res.status(404).json({ message: 'game not found' });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const deleteSpecificLibrary = async (req, res) => {
  try {
    const gameLib = await gameLibraryModel.findById(req.params.id);

    if (gameLib) {
      await gameLib.deleteOne();
      return res.status(200).json({ message: 'game deleted' });
    }
    return res.status(404).json({ message: 'game not found' });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = {
  addLibrary,
  deleteSpecificLibrary,
  editSpecificLibrary,
  getAllLibraries,
  getSpecificLibrary,
};
