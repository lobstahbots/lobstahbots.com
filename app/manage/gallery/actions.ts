"use server";

import { del, put } from "@vercel/blob";
import sharp from "sharp";
import dbConnect from "../../../lib/dbConnect";
import GallerySection from "../../../models/gallerySection";
import { revalidateTag } from "next/cache";

export const addImage = async (formData: FormData) => {
  await dbConnect();
  const image = formData.get("image") as File | null;
  const _id = formData.get("_id");
  if (!image || image.size === 0) {
    return null;
  }
  const result = await put(`gallery/${image.name}`, image, {
    access: "public",
    addRandomSuffix: true,
  });
  await GallerySection.findByIdAndUpdate(_id, { $push: { images: result.url } });
  revalidateTag("gallery");
  return result.url;
};

export const removeImage = async (formData: FormData) => {
  await dbConnect();
  const imageUrl = formData.get("imageUrl");
  const _id = formData.get("_id");
  if (typeof imageUrl !== "string" || !imageUrl) {
    return;
  }
  await GallerySection.findByIdAndUpdate(_id, { $pull: { images: imageUrl } });
  await del(imageUrl);
  revalidateTag("gallery");
};
