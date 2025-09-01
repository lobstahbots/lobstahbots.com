import Image, { StaticImageData } from "next/image";
import styles from "./galleryImage.module.css";

interface GalleryImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

export default function GalleryImage({ src, alt, className = "" }: GalleryImageProps) {
  return (
    <Image
      className={`responsive-image brand-border ${styles.galleryImage} ${className}`}
      src={src}
      alt={alt}
    />
  );
}
