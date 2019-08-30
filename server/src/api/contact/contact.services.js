import { ContactModel } from "./contact.model";

export async function findContact(params) {
  return ContactModel.findOne(params);
}

export async function saveContact({ email, phone, query }) {
  return ContactModel.create({ email, password, query });
}

export async function create(params) {
  const contactData = new ContactModel(params);
  await contactData.save();
}
