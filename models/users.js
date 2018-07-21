const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  isDeleted: { type: Boolean, default: false },
  signUpDate: { type: Date, default: Date.now() },
  loginAttempts: { type: Number, default: '' },
  profilePhoto: { data: Buffer, type: String },
  galleryPhotos: { data: Buffer, type: String },
  first: {data: Buffer, type: String, default: ''},
  last: {data: Buffer, type: String, default: ''},
  title: {data: Buffer, type: String, default: ''},
  instagram: {data: Buffer, type: String, default: ''},
  twitter: {data: Buffer, type: String, default: '' },
  linkedin: {data: Buffer, type: String, default: ''}, 
  website: {data: Buffer, type: String, default: ''},
  image: {data: Buffer, type: String, default: ''}
});

UserSchema.methods.generateHash = function(password) {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcryptjs.compareSync(password, this.password);
};
const User = module.exports = mongoose.model('User', UserSchema);

module.exports = User;
