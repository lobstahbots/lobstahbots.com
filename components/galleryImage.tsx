import Image, { StaticImageData } from "next/image";
import styles from "./galleryImage.module.css";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function GalleryImage({ src, alt, className = "" }: GalleryImageProps) {
  return (
    <img
      className={`responsive-image brand-border ${styles.galleryImage} ${className}`}
      src={src}
      alt={alt}
    />
  );
}
