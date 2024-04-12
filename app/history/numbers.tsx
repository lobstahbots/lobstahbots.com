"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export const Numbers = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return (
    <section className={`section ${styles.stats}`}>
      <div className={styles.stat}>
        <div className={`${styles.number} ${loaded ? styles.loaded: ""}`} id={styles.yearsCompeted}><span>26</span></div> {/* Also change in styles.module.css */}
        <div className={styles.label}>Years</div>
      </div>
      <div className={styles.stat}>
        <div className={`${styles.number} ${loaded ? styles.loaded: ""}`} id={styles.awardsEarned}><span>25</span></div>
        <div className={styles.label}>Total Awards Earned</div>
      </div>
      <div className={styles.stat}>
        <div className={`${styles.number} ${loaded ? styles.loaded: ""}`} id={styles.eventsAttended}><span>55</span></div>
        <div className={styles.label}>Events Attended</div>
      </div>
    </section>
  );
};
