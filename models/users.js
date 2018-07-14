const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  isDeleted: { type: Boolean, default: false },
  signUpDate: { type: Date, default: Date.now() },
  loginAttempts: { type: Number, default: '' },
<<<<<<< HEAD
  profilePhoto: { data: Buffer, type: Array },
  galleryPhotos: { data: Buffer, type: Array }
=======
  profilePhoto: { data: Buffer, type: String },
  galleryPhotos: { data: Buffer, type: String },
  first: {data: Buffer, type: String, default: 'Pablo'},
  last: {data: Buffer, type: String, default: 'Picasso'},
  title: {data: Buffer, type: String, default: 'Cofounder & CTO'},
  instagram: {data: Buffer, type: String, default: 'www.instagram.com'},
  twitter: {data: Buffer, type: String, default: 'www.twitter.com' },
  linkedin: {data: Buffer, type: String, default: 'www.linkedIN.com'}, 
  website: {data: Buffer, type: String, default: 'www.squarespace.com/tour/portfolio-website'},
  image: {data: Buffer, type: String, default: 'https://images.pexels.com/photos/556069/pexels-photo-556069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
>>>>>>> a3b5d383d2ffb5a8b50f58afd222d7352da42461
});

UserSchema.methods.generateHash = function(password) {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcryptjs.compareSync(password, this.password);
};
const User = module.exports = mongoose.model('User', UserSchema);

module.exports = User;
