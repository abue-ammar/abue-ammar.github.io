// app/api/models/Skill.ts
import { Schema, model, models } from "mongoose";

export interface ISkill {
  name: string;
  url: string;
}

const skillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const Skill = models.Skill || model<ISkill>("Skill", skillSchema);
export default Skill;
