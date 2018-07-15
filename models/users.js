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
  firstName: {data: Buffer, type: String, default: 'Pablo'},
  lastName: {data: Buffer, type: String, default: 'Picasso'},
  phoneNumber: {data: Buffer, type: Number, default: '800-867-5309'},
  artistBio: {data: Buffer, type: String, default: 'Your Artistic Mission'},
  title: {data: Buffer, type: String, default: 'Cofounder & CTO'},
  InstagramHandle: {data: Buffer, type: String, default: 'www.instagram.com'},
  TwitterHandle: {data: Buffer, type: String, default: 'www.twitter.com' },
  linkedin: {data: Buffer, type: String, default: 'www.linkedIN.com'}, 
  website: {data: Buffer, type: String, default: 'www.squarespace.com/tour/portfolio-website'},
  image: {data: Buffer, type: String, default: 'https://images.pexels.com/photos/556069/pexels-photo-556069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
});


UserSchema.methods.generateHash = function(password) {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcryptjs.compareSync(password, this.password);
};
UserSchema.methods.generateHash = function(twitter, InstagramHandle) {
  return bcryptjs.hashSync(Twitterhandle, InstagramHandle, bcryptjs.genSaltSync(8), null);
};

const User = module.exports = mongoose.model('User', UserSchema);

module.exports = User;
