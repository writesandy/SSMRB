const mongoose = require('mongoose');
<<<<<<< HEAD
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  },
  loginAttempts: 
  {
    type: Number,
    default: ''
  }
});
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
=======
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  isDeleted: { type: Boolean, default: false },
  signUpDate: { type: Date, default: Date.now() },
  loginAttempts: { type: Number, default: '' },
  profilePhoto: { data: Buffer, type: String },
  galleryPhotos: { data: Buffer, type: String }
});

UserSchema.methods.generateHash = function(password) {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcryptjs.compareSync(password, this.password);
>>>>>>> c2a850bc6adace00254d4483c04533b088cfe1f4
};
const User = module.exports = mongoose.model('User', UserSchema);

module.exports = User;
