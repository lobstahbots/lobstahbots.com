"use client";

import { useTransition } from "react";
import { Trash2 } from "react-feather";
import { removeImage } from "./actions";

export default function GalleryImageEdit({
  sectionId,
  imageUrl,}: {
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
    <div>
      <img src={imageUrl} alt={`Gallery image in section ${sectionId}`} />
      <button onClick={handleRemove} disabled={isPending}>
        <Trash2 />
      </button>
    </div>
  );
}