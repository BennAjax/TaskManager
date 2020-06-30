import mongoose from 'mongoose';
import StringUtil from '../utilities/StringUtil';

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

userSchema.pre('save', function(next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  next();
});

export default mongoose.model('user', userSchema);
