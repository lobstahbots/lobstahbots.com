import mongoose, { Document, Model, Schema } from "mongoose";

export interface IImage extends Document {
  key: string;
  alt: string;
  width: number;
  height: number;
}

const ImageSchema: Schema<IImage> = new Schema({
  key: { type: String, required: true, unique: true },
  alt: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});

const ImageModel: Model<IImage> =
  mongoose.models.Image || mongoose.model<IImage>("Image", ImageSchema);

export default ImageModel;
