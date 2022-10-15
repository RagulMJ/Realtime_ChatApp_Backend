const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.a8imc.mongodb.net/Chat?retryWrites=true&w=majority`
  )
  .then(() => console.log('connted to mongodb'))
  .catch((e) => console.log(e));
