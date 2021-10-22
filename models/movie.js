const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  director: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value, {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        required_protocol: true,
      }),
      message: 'Некорректный формат ссылки',
    },
  },
  trailer: {
    type: String,
    require: true,
    validate: {
      validator: (value) => validator.isURL(value, {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        required_protocol: true,
      }),
      message: 'Некорректный формат ссылки',
    },
  },
  thumbnail: {
    type: String,
    require: true,
    validate: {
      validator: (value) => validator.isURL(value, {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        required_protocol: true,
      }),
      message: 'Некорректный формат ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    select: true,
  },
  movieId: {
    type: Number,
    require: true,
  },
  nameRU: {
    type: String,
    require: true,
  },
  nameEN: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
