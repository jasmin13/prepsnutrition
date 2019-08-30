import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  query: { type: String, required: true }
});

export const ContactModel = mongoose.model("contact_us", contactSchema);
