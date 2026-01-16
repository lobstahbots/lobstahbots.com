import Image from "next/image";
import styles from "./galleryImage.module.css";
import { IImage } from "../models/image";

interface GalleryImageProps {
  image: IImage;
  className?: string;
}

export default function GalleryImage({ image, className = "" }: GalleryImageProps) {
  return (
    <Image
      className={`responsive-image brand-border ${styles.galleryImage} ${className}`}
      src={"https://r2.lobstahbots.com/" + image.key}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
    />
  );
}
