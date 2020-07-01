import mongoose from 'mongoose';
import StringUtil from '../utilities/StringUtil';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});

userSchema.set('timestamps', true);

userSchema.virtual('fullName').get(function() {
  const first = StringUtil.capitalize(this.first.tolowerCase());
  const last = StringUtil.capitalize(this.last.tolowerCase());
  return `${first} ${last}`;
});

userSchema.statics.passwordMatches = function(password, hash) {
  return bcrypt.compareSync(password, hash);
}

userSchema.pre('save', function(next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();

  const unsafePassword = this.password;
  this.password = bcrypt.hashSync(unsafePassword);
  next();
});

export default mongoose.model('user', userSchema);
