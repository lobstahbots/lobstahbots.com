import mongoose, { Schema, Document, Model, Types } from "mongoose";
import { IImage } from "./image";

// Define the interface for the document
export interface INewsletter extends Document {
  title: string;
  slug: string;
  numericalDate: Date;
  date: string;
  fundraiseText?: string;
  coverImage?: Types.ObjectId | IImage;
  content: string;
  images: (Types.ObjectId | IImage)[];
}

// Define the schema
const NewsletterSchema: Schema<INewsletter> = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  numericalDate: {
    type: Date,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  fundraiseText: {
    type: String,
    required: false,
  },
  coverImage: {
    type: Schema.Types.ObjectId,
    ref: "Image",
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: [{ type: Schema.Types.ObjectId, ref: "Image" }],
    required: true,
  },
}, {
  timestamps: true,
});

// Create and export the model
const NewsletterModel: Model<INewsletter> =
  mongoose.models.Newsletter || mongoose.model<INewsletter>("Newsletter", NewsletterSchema);

export default NewsletterModel;
