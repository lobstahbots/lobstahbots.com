"use client";

import { useTransition } from "react";
import { IGallerySection } from "../../../models/gallerySection";
import GalleryImageEdit from "./GalleryImageEdit";
import { addImage } from "./actions";

export default function GalleryPart({ section }: { section: IGallerySection }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <h2>{section.title}</h2>
      {section.images.map((image) => (
        <GalleryImageEdit key={image} sectionId={section._id as string} imageUrl={image} />
      ))}
      <input
        type="file"
        multiple
        disabled={isPending}
        onChange={(e) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            startTransition(async () => {
              await Promise.all(
                Array.from(files).map((file) => {
                  const formData = new FormData();
                  formData.append("_id", section._id as string);
                  formData.append("image", file);
                  return addImage(formData);
                }),
              );
            });
          }
        }}
      />
    </div>
  );
}
