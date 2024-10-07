// app/api/models/Contact.ts
import { Schema, model, models } from "mongoose";

export interface IContact {
  github: string;
  mail: string;
  linkedin: string;
  phone: string;
}

const contactSchema = new Schema<IContact>({
  github: { type: String, required: true },
  mail: { type: String, required: true },
  linkedin: { type: String, required: true },
  phone: { type: String, required: true },
});

const Contact = models.Contact || model<IContact>("Contact", contactSchema);
export default Contact;
