import Link from "next/link";
import styles from "./poweredByTba.module.css";

export default function PoweredByTba() {
  return (
    <section className="section container">
      <div>
        Powered by{" "}
        <Link id={styles.tbaLink} target="_blank" href="https://www.thebluealliance.com">
          The Blue Alliance
        </Link>
        .
      </div>
    </section>
  );
}
