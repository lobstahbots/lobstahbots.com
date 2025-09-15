import styles from "./styles.module.css";
import PageTitle from "../../components/page-title";
import GalleryImage from "../../components/galleryImage";
import { unstable_cache } from "next/cache";
import dbConnect from "../../lib/dbConnect";
import GallerySection, { IGallerySection } from "../../models/gallerySection";

export const metadata = {
  title: "Gallery",
};

const getSections = unstable_cache(
  async (): Promise<IGallerySection[]> => {
    await dbConnect();
    return (await GallerySection.find({}).sort({ title: -1 }));
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
              <GalleryImage key={image} src={image} alt={`246 ${section.title} gallery image`} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
