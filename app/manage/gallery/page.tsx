import { unstable_cache } from "next/cache";
import GallerySection, { IGallerySection } from "../../../models/gallerySection";
import dbConnect from "../../../lib/dbConnect";
import GalleryPart from "./GalleryPart";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Manage Gallery",
};

const getSections = unstable_cache(
  async (): Promise<IGallerySection[]> => {
    await dbConnect();
    return (await GallerySection.find({}).sort({ title: -1 })).map((section) =>
      JSON.parse(JSON.stringify(section.toObject())),
    );
  },
  [],
  { tags: ["gallery"] },
);

export default async function ManageGalleryPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/account");
  }

  const sections = await getSections();
  return (
    <div>
      {sections.map((section) => (
        <GalleryPart key={section._id as string} section={section} />
      ))}
    </div>
  );
}
