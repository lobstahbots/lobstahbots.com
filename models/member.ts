import mongoose, { Document, Model, Schema } from "mongoose";

// Define the interface for the document
export interface IMember extends Document {
  name: string;
  roles: string[];
  type: "student" | "mentor" | "studentleader";
  image?: string;
}

const MemberSchema: Schema<IMember> = new Schema({
  name: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  },
  type: {
    type: String,
    enum: ["student", "mentor", "studentleader"],
    required: true,
  },
  image: {
    type: String,
  },
});

const MemberModel: Model<IMember> =
  mongoose.models.Member || mongoose.model<IMember>("Member", MemberSchema);

export default MemberModel;
