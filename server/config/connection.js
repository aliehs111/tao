require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tao'
);//this is not set up in mongodb yet

module.exports = mongoose.connection;