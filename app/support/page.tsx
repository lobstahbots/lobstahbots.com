import styles from "./styles.module.css";
import Link from "next/link";
import { ExternalLink } from "react-feather";

export const metadata = {
  title: "Support Us",
};

export default function Support() {
  return (
    <main>
      <div className="section container">
        <h1>Support Us</h1>
        <p>
          Thank you for your interest in becoming a sponsor! Sponsoring our team comes with specific
          benefits per sponsorship tier. <br /> We also accept in-kind donations! If you have tools,
          materials, food, or other resources that you would like to donate, please reach out and we
          will let you know if it is something we can accept. <br /> Finally, we are always looking
          for new mentors! Let us know if you would be interested in working with our team.
        </p>
        <Link
          href="/donate"
          className={styles.donateButton}
        >
          Make A Contribution!
        </Link>
      </div>
      <div className="bg-gray">
        <div className="section container">
          <h1>Sponsorship Tiers</h1>
          <div>
            <div className={`brand-border ${styles.sponsorTier}`} id={styles.krill}>
              <h2>Krill</h2>
              <div className={styles.money}>$100+</div>
              <ul className={styles.benefits}>
                <li>Your name and logo will be on our website.</li>
              </ul>
            </div>
            <div className={`brand-border ${styles.sponsorTier}`} id={styles.shrimp}>
              <h2>Shrimp</h2>
              <div className={styles.money}>$500+</div>
              <ul className={styles.benefits}>
                <li>All previous benefits.</li>
                <li>Your name and logo will be on our team shirt.</li>
              </ul>
            </div>
            <div className={`brand-border ${styles.sponsorTier}`} id={styles.crab}>
              <h2>Crab</h2>
              <div className={styles.money}>$1000+</div>
              <ul className={styles.benefits}>
                <li>All previous benefits.</li>
                <li>Your name and logo will feature on our robot.</li>
              </ul>
            </div>
            <div className={`brand-border ${styles.sponsorTier}`} id={styles.lobstah}>
              <h2>Lobstah</h2>
              <div className={styles.money}>$4000+</div>
              <ul className={styles.benefits}>
                <li>All previous benefits.</li>
                <li>
                  Your company name will be included in the long-form team name and will be
                  announced to spectators at all official competitions.
                </li>
                <li>
                  Your name and logo will feature on our banner hung in our stands at competitions!
                </li>
                <li>A yearly robot demonstration at a company event of your choosing.</li>
              </ul>
            </div>
            <div className={`brand-border ${styles.sponsorTier}`} id={styles.blueLobstah}>
              <h2>Blue Lobstah</h2>
              <div className={styles.money}>$8000+</div>
              <ul className={styles.benefits}>
                <li>All previous benefits</li>
                <li>Multiple robot demonstrations at company events.</li>
                <li>
                  Your name and logo will feature on all promotional pamphlets, flyers, engineering
                  documentation, and newsletters.
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="https://drive.google.com/file/d/1RZfQazIUt9vKnLXxb56axNBI7H7Gtghv/view?usp=sharing"
            target="_blank"
            className="button"
          >
            Full Sponsorship Information <ExternalLink className={styles.externalLink} />
          </Link>
        </div>
      </div>
    </main>
  );
}
