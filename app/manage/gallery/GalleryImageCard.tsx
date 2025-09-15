"use client";

import { useTransition } from "react";
import { Trash2 } from "react-feather";
import { removeImage } from "./actions";
import styles from "./styles.module.css";

export default function GalleryImageCard({
  sectionId,
  imageUrl,
}: {
  sectionId: string;
  imageUrl: string;
}) {
  const [isPending, startTransition] = useTransition();

  const handleRemove = () => {
    const formData = new FormData();
    formData.append("_id", sectionId);
    formData.append("imageUrl", imageUrl);
    startTransition(async () => {
      await removeImage(formData);
    });
  };

  return (
    <div className={styles.imageCard}>
      <img src={imageUrl} alt={`Gallery image`} className={styles.galleryImage} />
      <button
        onClick={handleRemove}
        disabled={isPending}
        className={styles.deleteButton}
        title="Delete image"
      >
        <Trash2 className={styles.deleteIcon} />
      </button>
      {isPending && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
    </div>
  );
}
