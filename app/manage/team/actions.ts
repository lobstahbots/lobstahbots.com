"use server";

import dbConnect from "../../../lib/dbConnect";
import Member from "../../../models/member";
import { revalidateTag } from "next/cache";
import { deleteImage } from "../../../lib/images";
import ImageModel, { IImage } from "../../../models/image";

export const deleteMember = async (formData: FormData) => {
  await dbConnect();
  const _id = formData.get("_id");
  if (typeof _id !== "string") {
    return false;
  }
  const member = await Member.findByIdAndDelete(_id).populate("image");
  if (!member) return false;
  if (member.image) {
    await deleteImage(member.image as IImage);
  }
  revalidateTag("members", "max");
  return true;
};

export const updateMember = async (formData: FormData) => {
  await dbConnect();
  const _id = formData.get("_id");
  const name = formData.get("name");
  const roles = formData.getAll("roles").filter((role) => typeof role === "string") as string[];
  const type = formData.get("type");
  const imageKey = formData.get("imageKey");
  const imageWidth = formData.get("imageWidth");
  const imageHeight = formData.get("imageHeight");
  if (typeof _id !== "string" || typeof name !== "string" || typeof type !== "string") {
    return null;
  }
  let image: IImage | undefined = undefined;
  if (
    typeof imageKey === "string" &&
    Number.isInteger(parseInt(imageWidth as string)) &&
    Number.isInteger(parseInt(imageHeight as string))
  ) {
    image = await new ImageModel({
      key: imageKey,
      width: parseInt(imageWidth as string),
      height: parseInt(imageHeight as string),
      alt: `${name}'s profile image`,
    }).save();
  }
  const result = await Member.findByIdAndUpdate(
    _id,
    {
      name,
      roles,
      type,
      ...(image ? { image: image._id } : {}),
    },
    { new: true },
  );
  revalidateTag("members", "max");
  return result ? JSON.parse(JSON.stringify(result.toObject())) : null;
};

export const createMember = async (formData: FormData) => {
  await dbConnect();
  const name = formData.get("name");
  const roles = formData.getAll("roles").filter((role) => typeof role === "string") as string[];
  const type = formData.get("type");
  const imageKey = formData.get("imageKey");
  const imageWidth = formData.get("imageWidth");
  const imageHeight = formData.get("imageHeight");
  if (typeof name !== "string" || typeof type !== "string") {
    return null;
  }
  let image: IImage | undefined = undefined;
  if (
    typeof imageKey === "string" &&
    Number.isInteger(parseInt(imageWidth as string)) &&
    Number.isInteger(parseInt(imageHeight as string))
  ) {
    image = await new ImageModel({
      key: imageKey,
      width: parseInt(imageWidth as string),
      height: parseInt(imageHeight as string),
      alt: `${name}'s profile image`,
    }).save();
  }
  const member = new Member({
    name,
    roles,
    type,
    ...(image ? { image: image._id } : {}),
  });
  await member.save();
  revalidateTag("members", "max");
  return JSON.parse(JSON.stringify(member.toObject()));
};
