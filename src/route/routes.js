const express = require('express');
const {
  getAllLibraries, getSpecificLibrary, addLibrary, editSpecificLibrary, deleteSpecificLibrary,
} = require('../controller/libraryGameController');

const router = express.Router();

// routing
router.get('/', (req, res) => { res.redirect('https://youtu.be/BbeeuzU5Qc8?si=omylo05FqZ_9b1gR'); });

router.get('/libraries', getAllLibraries); // meminta seluruh isi library

router.get('/library/:id', getSpecificLibrary); // meminta library spesifik berdasarkan id

router.post('/library', addLibrary); // menambahkan  library

router.put('/library/:id', editSpecificLibrary); // mengubah library spesifik berdasarkan id

router.delete('/library/:id', deleteSpecificLibrary); // menghapus library spesifik berdasarkan id

module.exports = { router };
