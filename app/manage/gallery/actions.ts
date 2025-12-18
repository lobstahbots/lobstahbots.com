"use server";

import dbConnect from "../../../lib/dbConnect";
import GallerySection from "../../../models/gallerySection";
import { revalidateTag } from "next/cache";
import ImageModel, { IImage } from "../../../models/image";
import { deleteImage } from "../../../lib/images";

export const addImage = async (formData: FormData) => {
  await dbConnect();
  const _id = formData.get("_id");
  const imageKey = formData.get("imageKey");
  const imageWidth = formData.get("imageWidth");
  const imageHeight = formData.get("imageHeight");
  if (
    typeof _id !== "string" ||
    typeof imageKey !== "string" ||
    !Number.isInteger(parseInt(imageWidth as string)) ||
    !Number.isInteger(parseInt(imageHeight as string))
  ) {
    return null;
  }
  let image = await new ImageModel({
    key: imageKey,
    width: parseInt(imageWidth as string),
    height: parseInt(imageHeight as string),
    alt: "gallery image",
  }).save();
  await GallerySection.findByIdAndUpdate(_id, { $push: { images: image._id } });
  return image._id;
};

export const refresh = async (formData: FormData) => {
  revalidateTag("gallery", "max");
};

export const removeImage = async (formData: FormData) => {
  await dbConnect();
  const imageKey = formData.get("imageKey");
  const _id = formData.get("_id");
  if (typeof imageKey !== "string" || !imageKey) {
    return;
  }
  const image = (await ImageModel.findOne({ key: imageKey })) as IImage | null;
  if (!image) {
    return;
  }
  await GallerySection.findByIdAndUpdate(_id, { $pull: { images: image._id } });
  await deleteImage(image);
  revalidateTag("gallery", "max");
};
