import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import ImageModel, { IImage } from "../models/image";
import { bucket, bucketName } from "./r2";

export const deleteImage = async (image: IImage) => {
  await bucket.send(
    new DeleteObjectCommand({
      Bucket: bucketName,
      Key: image.key,
    }),
  );
  await ImageModel.findByIdAndDelete(image._id);
};
