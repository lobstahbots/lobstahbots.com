"use server";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import path from "path";
import { bucket, bucketName } from "../../lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export const getUploadURL = async (formData: FormData): Promise<{ url: string; key: string }> => {
  const filename = formData.get("filename");
  const contentType = formData.get("contentType");
  if (typeof filename !== "string" || typeof contentType !== "string") {
    throw new Error("Invalid filename");
  }
  const parsed = path.parse(filename);
  const key = `${parsed.dir}/${parsed.name}-${crypto.randomUUID()}${parsed.ext}`;
  const result = await getSignedUrl(
    bucket,
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      ContentType: contentType,
    }),
    { expiresIn: 3600 },
  );
  return { url: result, key };
};
