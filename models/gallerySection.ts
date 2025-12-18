import mongoose, { Document, Model, Schema } from "mongoose";
import { IImage } from "./image";

export interface IGallerySection extends Document {
  title: string;
  images: (Schema.Types.ObjectId | IImage)[];
}

const GallerySectionSchema = new Schema<IGallerySection>({
  title: { type: String, required: true },
  images: { type: [{ type: Schema.Types.ObjectId, ref: "Image" }], required: true },
});

const GallerySectionModel: Model<IGallerySection> =
  mongoose.models.GallerySection ||
  mongoose.model<IGallerySection>("GallerySection", GallerySectionSchema);

export default GallerySectionModel;
