// app/api/models/Education.ts
import { Schema, model, models } from "mongoose";

export interface IEducation {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

const educationSchema = new Schema<IEducation>({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  duration: { type: String, required: true },
  location: { type: String, required: true },
});

const Education =
  models.Education || model<IEducation>("Education", educationSchema);
export default Education;
