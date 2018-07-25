const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  InstagramHandle: {
    type: String,
    default: ''
  },
  first: {
    type: String,
    default: ''
  },
  last: {
    type: String,
    default: ''
  },






  
});

module.exports = mongoose.model('UserSession', UserSessionSchema);