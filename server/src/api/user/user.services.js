import {UserModel} from './user.model';

export async function findUser(params) {
  return UserModel.findOne(params)
}

export async function saveUser({email, phone, firstName, lastName, password}) {
  return UserModel.create({email, password, firstName, lastName, phone});
}
