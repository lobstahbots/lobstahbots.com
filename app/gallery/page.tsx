import styles from "./styles.module.css";
import PageTitle from "../../components/page-title";
import GalleryImage from "../../components/galleryImage";
import { unstable_cache } from "next/cache";
import dbConnect from "../../lib/dbConnect";
import GallerySection, { IGallerySection } from "../../models/gallerySection";
import { IImage } from "../../models/image";

export const metadata = {
  title: "Gallery",
};

const getSections = unstable_cache(
  async (): Promise<IGallerySection[]> => {
    await dbConnect();
    return (await GallerySection.find({}).sort({ title: -1 }).populate("images")).map((section) =>
      JSON.parse(JSON.stringify(section.toObject())),
    );
  },
  [],
  { tags: ["gallery"] },
);

export default async function Gallery() {
  const sections = await getSections();

  return (
    <main>
      <PageTitle>Gallery</PageTitle>
      {sections.map((section) => (
        <section key={section._id as string} className="section">
          <h1 className="container">{section.title}</h1>
          <div className={styles.gallery}>
            {section.images.map((image) => (
              <GalleryImage key={(image as IImage)._id as string} image={image as IImage} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
