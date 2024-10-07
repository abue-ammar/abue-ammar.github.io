// app/api/models/Intro.ts
import { Schema, model, models } from "mongoose";

export interface IIntro {
  title: string;
  desc: string;
}

const introSchema = new Schema<IIntro>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
});

const Intro = models.Intro || model<IIntro>("Intro", introSchema);
export default Intro;
