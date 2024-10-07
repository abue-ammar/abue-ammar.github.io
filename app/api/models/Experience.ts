// app/api/models/Experience.ts
import mongoose, { Schema, model, models } from "mongoose";

export interface IExperience {
  name: string;
  position: string;
  duration: string;
  tasks: string[];
}

const experienceSchema = new Schema<IExperience>({
  name: { type: String, required: true },
  position: { type: String, required: true },
  duration: { type: String, required: true },
  tasks: [{ type: String, required: true }],
});

const Experience = models.Experience || model<IExperience>("Experience", experienceSchema);
export default Experience;
