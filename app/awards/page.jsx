import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import { ExternalLink } from "react-feather";
import PageTitle from "../../components/page-title";

export const metadata = {
  title: "Awards",
};

export default function Awards() {
  return (
    <main>
      <PageTitle>
        Our Accomplishments
      </PageTitle>
      <section className={`section ${styles.stats}`}>
        <div className={styles.stat}>
          <div className={styles.number} > 2023 </div>
          <div className={styles.label} > Quality Award Winner </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number} > 3x </div>
          < div className={styles.label} > Creativity Award Winner </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number} > 2x </div>
          < div className={styles.label} > Entrepreneurship Award Winner  </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number} > 3x </div>
          < div className={styles.label} > Engineering Inspiration Award Winner  </div>
        </div>
      </section>
    </main>);
}