import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the document
export interface INewsletter extends Document {
  title: string;
  slug: string;
  numericalDate: Date;
  date: string;
  fundraiseText?: string;
  coverImage?: string;
  content: string;
  images: string[];
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
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

// Create and export the model
const NewsletterModel: Model<INewsletter> =
  mongoose.models.Newsletter || mongoose.model<INewsletter>("Newsletter", NewsletterSchema);

export default NewsletterModel;
