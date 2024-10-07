// app/api/models/Project.ts
import { Schema, model, models } from "mongoose";

export interface IProject {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  techs: string;
}

const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  github: { type: String },
  image: { type: String },
  techs: { type: String, required: true },
});

const Project = models.Project || model<IProject>("Project", projectSchema);
export default Project;
