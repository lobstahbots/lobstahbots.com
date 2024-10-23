"use client"

import styles from "./styles.module.css";
import useCountdown from "../../../lib/useCountdown";
import Link from "next/link";

export default function Page() {
  const countdown = useCountdown(new Date(1730174400000));

  return (
    <main>
      <div className="section container">
        <h1>Get ready for the 2024 crowdfunding campaign!</h1>
        <p>2…4…6… and we’re a go! The Lobstah Bots are back at it! Our crowdfunding campaign is kicking on October 27. Spread the word, stay tuned for some furious fundraising, and check back at this page.</p>
      </div>
      <div className="bg-brand">
        <div className="section container">
          <div className={styles.countdown}>
            <div className={styles.column}>
              <div className={styles.value}> {countdown.days} </div>
              <div className={styles.unitLabel}> Days </div>
            </div>
            <div className={styles.column}>
              <div className={styles.value}> {countdown.hours} </div>
              <div className={styles.unitLabel}> Hours </div>
            </div>
            <div className={styles.column}>
              <div className={styles.value}> {countdown.minutes} </div>
              <div className={styles.unitLabel}> Minutes </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className={styles.tagline}>...before the start of the campaign!</p>
        <div className={`section ${styles.right}`}>
          <Link className="button" href="/">Learn More About Our Team</Link>
        </div>
      </div>
    </main>
  )
}