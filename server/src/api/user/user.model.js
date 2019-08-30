import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  password: {type: String, required: true},
  email: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: String, required: true},
});

userSchema.methods.validPassword = function( pwd ) {
  return ( this.password === pwd );
};

export const UserModel = mongoose.model('User', userSchema);
