import mongoose, { Document, Model, Schema } from "mongoose";

export interface IGallerySection extends Document {
  title: string;
  images: string[];
}

const GallerySectionSchema = new Schema<IGallerySection>({
  title: { type: String, required: true },
  images: { type: [String], required: true },
});

const GallerySectionModel: Model<IGallerySection> =
  mongoose.models.GallerySection ||
  mongoose.model<IGallerySection>("GallerySection", GallerySectionSchema);

export default GallerySectionModel;
