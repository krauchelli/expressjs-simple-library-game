const express = require('express');
const mongoose = require('mongoose');
const { dbConfig } = require('./config/databaseConfig');
const { configModel } = require('./model/index');
const { router } = require('./route/routes');

const app = express();
const port = 3000;

/*

 konfigurasi untuk passport

const usersmodel = configModel.users;
require('./config/passportConfig');
*/

// middleware dan routes
app.use(express.json());
app.use(router);

// koneksi ke mongo
mongoose.set('strictQuery', false);
mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

// listener
app.listen(port, () => {
  console.log(`dimulai dengan port ${port}`);
});
