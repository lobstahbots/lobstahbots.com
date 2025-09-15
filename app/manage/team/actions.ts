"use server";

import { PutBlobResult, del, put } from "@vercel/blob";
import dbConnect from "../../../lib/dbConnect";
import Member from "../../../models/member";
import { revalidateTag } from "next/cache";

export const deleteMember = async (formData: FormData) => {
  await dbConnect();
  const _id = formData.get("_id");
  if (typeof _id !== "string") {
    return false;
  }
  const member = await Member.findByIdAndDelete(_id);
  if (!member) return false;
  if (member.image) {
    await del(member.image);
  }
  revalidateTag("members");
  return true;
};

export const updateMember = async (formData: FormData) => {
  await dbConnect();
  const _id = formData.get("_id");
  const name = formData.get("name");
  const roles = formData.getAll("roles").filter((role) => typeof role === "string") as string[];
  const type = formData.get("type");
  const image = formData.get("image") as File | null;
  if (typeof _id !== "string" || typeof name !== "string" || typeof type !== "string") {
    return null;
  }
  let imageResult: PutBlobResult | undefined;
  if (image && image.size > 0) {
    imageResult = await put(`team/${image.name}`, image, {
      access: "public",
      addRandomSuffix: true,
    });
  }
  const result = await Member.findByIdAndUpdate(
    _id,
    {
      name,
      roles,
      type,
      ...(imageResult ? { image: imageResult.url } : {}),
    },
    { new: true },
  );
  revalidateTag("members");
  return result?.toObject?.() ?? null;
};

export const createMember = async (formData: FormData) => {
  await dbConnect();
  const name = formData.get("name");
  const roles = formData.getAll("roles").filter((role) => typeof role === "string") as string[];
  const type = formData.get("type");
  const image = formData.get("image") as File | null;
  if (typeof name !== "string" || typeof type !== "string") {
    return null;
  }
  let imageResult: PutBlobResult | undefined;
  if (image && image.size > 0) {
    imageResult = await put(`team/${image.name}`, image, {
      access: "public",
      addRandomSuffix: true,
    });
  }
  const member = new Member({
    name,
    roles,
    type,
    ...(imageResult ? { image: imageResult.url } : {}),
  });
  await member.save();
  revalidateTag("members");
  return member.toObject();
};
