// app/api/models/Resume.ts
import { Schema, model, models } from "mongoose";

export interface IResume {
  title: string;
  description?: string;
  link: string;
  download: string;
}

const resumeSchema = new Schema<IResume>({
  title: { type: String, required: true },
  description: { type: String },
  link: { type: String, required: true },
  download: { type: String, required: true },
});

const Resume = models.Resume || model<IResume>("Resume", resumeSchema);
export default Resume;
