"use client";
import styles from "./styles.module.css";
import { CSSProperties, useEffect, useState } from "react";

interface NumbersProps {
  yearsCompeted: number;
  awardsEarned: number;
  eventsAttended: number;
}

export const Numbers = ({ yearsCompeted, awardsEarned, eventsAttended }: NumbersProps) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const cssVars = {
    "--years-competed": yearsCompeted,
    "--awards-earned": awardsEarned,
    "--events-attended": eventsAttended,
  } as CSSProperties;
  return (
    <section className={`section ${styles.stats}`}>
      <div className={styles.stat}>
        <div className={styles.number} id={styles.yearsCompeted} style={loaded ? cssVars : undefined}>
          <span>{yearsCompeted}</span>
        </div>
        <div className={styles.label}>Years</div>
      </div>
      <div className={styles.stat}>
        <div className={styles.number} id={styles.awardsEarned} style={loaded ? cssVars : undefined}>
          <span>{awardsEarned}</span>
        </div>
        <div className={styles.label}>Total Awards Earned</div>
      </div>
      <div className={styles.stat}>
        <div className={styles.number} id={styles.eventsAttended} style={loaded ? cssVars : undefined}>
          <span>{eventsAttended}</span>
        </div>
        <div className={styles.label}>Events Attended</div>
      </div>
    </section>
  );
};
