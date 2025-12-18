"use client";

import { useTransition, useState, useRef, RefObject } from "react";
import { Upload, Image as ImageIcon, Trash2 } from "react-feather";
import { addImage, refresh } from "./actions";
import GalleryImageCard from "./GalleryImageCard";
import styles from "./styles.module.css";
import { getUploadURL } from "../actions";
import { IGallerySection } from "../../../models/gallerySection";
import { IImage } from "../../../models/image";

const addImgToWebp = async (selectedFile: File, section: IGallerySection) => {
  const formData = new FormData();
  formData.append("_id", section._id as string);
  const urlFormData = new FormData();
  urlFormData.append("filename", `gallery/${section.title}/${selectedFile.name}`);
  urlFormData.append("contentType", selectedFile.type);
  const { key, url } = await getUploadURL(urlFormData);
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": selectedFile.type,
    },
    body: selectedFile,
  });
  if (!res.ok) {
    alert("Failed to upload image");
    return;
  }
  const dataURL = URL.createObjectURL(selectedFile);
  const { width, height } = await new Promise<{ width: number; height: number }>((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width,
      });
    };
    img.src = dataURL;
  });
  URL.revokeObjectURL(dataURL);
  formData.append("imageKey", key);
  formData.append("imageWidth", width.toString());
  formData.append("imageHeight", height.toString());
  await addImage(formData);
};

export default function GalleryPart({ section }: { section: IGallerySection }) {
  const [isPending, startTransition] = useTransition();
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (files && files.length > 0) {
      startTransition(async () => {
        await Promise.all(
          Array.from(files).map((file) => {
            return addImgToWebp(file, section);
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
            <GalleryImageCard
              key={(image as IImage)._id as any}
              sectionId={section._id as string}
              imageKey={(image as IImage).key}
            />
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
