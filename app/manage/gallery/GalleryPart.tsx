"use client";

import { useTransition, useState, useRef, RefObject } from "react";
import { Upload, Image as ImageIcon, Trash2 } from "react-feather";
import { IGallerySection } from "../../../models/gallerySection";
import { addImage, refresh } from "./actions";
import GalleryImageCard from "./GalleryImageCard";
import styles from "./styles.module.css";

const addImgToWebp = async (file: File, _id: any) => {
  const image = new Image();
  image.src = URL.createObjectURL(file);
  await new Promise<void>((resolve) => {
    if (image.complete) resolve();
    image.onload = (_) => resolve();
  });
  const canvas = document.createElement("canvas");
  canvas.style.display = "none";
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  canvas.getContext("2d")?.drawImage(image, 0, 0);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/webp", 0.8));
  URL.revokeObjectURL(image.src);
  canvas.remove();
  if (!blob) throw new Error("Could not convert image to WebP");
  const webp = new File([blob], file.name.replace(/\.[^/.]+$/, ".webp"), { type: "image/webp" });
  const formData = new FormData();
  formData.append("_id", _id);
  formData.append("image", webp);
  await addImage(formData);
}

export default function GalleryPart({ section }: { section: IGallerySection }) {
  const [isPending, startTransition] = useTransition();
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (files && files.length > 0) {
      startTransition(async () => {
        await Promise.all(
          Array.from(files).map((file) => {
            return addImgToWebp(file, section._id);
          }),
        );
      await refresh(new FormData());
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <ImageIcon className={styles.icon} />
          {section.title}
        </h2>
        <div className={styles.imageCount}>
          {section.images.length} {section.images.length === 1 ? "image" : "images"}
        </div>
      </div>

      {section.images.length > 0 ? (
        <div className={styles.galleryGrid}>
          {section.images.map((image) => (
            <GalleryImageCard key={image} sectionId={section._id as string} imageUrl={image} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <ImageIcon className={styles.emptyStateIcon} />
          <p className={styles.emptyStateText}>No images yet</p>
          <p className={styles.emptyStateSubtext}>Upload some images to get started</p>
        </div>
      )}

      <div
        className={`${styles.uploadArea} ${dragOver ? styles.dragOver : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleUploadClick}
      >
        <div className={styles.uploadContent}>
          <Upload className={styles.uploadIcon} />
          <p className={styles.uploadText}>
            {isPending ? "Uploading images..." : "Drop images here or click to upload"}
          </p>
          <p className={styles.uploadSubtext}>Support for JPG, PNG, WebP files</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          disabled={isPending}
          className={styles.hiddenFileInput}
          onChange={(e) => handleFileSelect(e.target.files)}
        />
        {isPending && <div className={`${styles.uploadProgress} ${styles.active}`} />}
      </div>
    </div>
  );
}
