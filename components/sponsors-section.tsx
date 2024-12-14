import BULogo from "../images/sponsor-logos/BULogo.png";
import BayerLogo from "../images/sponsor-logos/BayerLogo.png";
import BoeingLogo from "../images/sponsor-logos/BoeingLogo.png";
import BostonScientificlogo from "../images/sponsor-logos/BostonScientificLogo.png";
import BUALogo from "../images/sponsor-logos/BUALogo.png";
import QualityGraphicsLogo from "../images/sponsor-logos/QualityGraphicsLogo.svg";
import StandardBotsLogo from "../images/sponsor-logos/StandardBotsLogo.svg";
import MTALogo from "../images/sponsor-logos/MTALogo.png";
import styles from "./sponsors-section.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SponsorsSection() {
  return (
    <section className="section container">
      <h1>Thank You To Our 2024 Sponsors & Donors!</h1>
      <div className={styles.gallery}>
        <Link href="https://www.bayer.com/en/" target="_blank">
          <Image src={BayerLogo} alt="Bayer Logo" className={styles.sponsorLogo} />
        </Link>
        <Link href="https://www.boeing.com/" target="_blank">
          <Image src={BoeingLogo} alt="Boeing Logo" className={styles.sponsorLogo} />
        </Link>
        <Link href="https://www.bu.edu/" target="_blank">
          <Image src={BULogo} alt="BU Logo" className={styles.sponsorLogo} />
        </Link>
        <Link href="https://www.bostonscientific.com/en-US/Home.html" target="_blank">
          <Image
            src={BostonScientificlogo}
            alt="Boston Scientific Logo"
            className={styles.sponsorLogo}
          />
        </Link>
        <Link href="https://www.buacademy.org/" target="_blank">
          <Image src={BUALogo} alt="BUA Logo" className={styles.sponsorLogo} />
        </Link>
        <Link href="https://qualitygraphicsinc.com/" target="_blank">
          <Image
            src={QualityGraphicsLogo}
            alt="Quality Graphics Logo"
            className={styles.sponsorLogo}
          />
        </Link>
        <Link href="https://medtechanalytics.com/" target="_blank">
          <Image src={MTALogo} alt="MedTech Analytics Logo" className={styles.sponsorLogo} />
        </Link>
        <div className={styles.sponsorLogo} id={styles.standardBots}>
          <Link href="https://standardbots.com/">
            <Image src={StandardBotsLogo} alt="Standard Bots Logo" />
          </Link>
          <Link
            className="link"
            href="https://standardbots.com/blog/how-to-launch-your-career-in-robotics-straight-out-of-high-school"
          >
            Check out their article on robotics after high school!
          </Link>
        </div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Teresa Scott</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Patricia Palmer</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Astro Teller</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Cindy & Steven Chao</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Donald Baltus</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>George Baltus</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Jackie Hilt</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Jie Lu</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Julie Saidenberg</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Laura Huang</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Laura Quinn</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Linda Burmeister</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Maggie Wu</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Mary Ziegler</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Michael David</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Nat Roberts</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Owen Gillespie</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Veronica Hui</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Dingli Zeng</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Hongming Chen</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Jon Spencer Ein</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>SiTing Han</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Janet Kraus</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>William Hickey</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Eve Brunts</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Fay Chang</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Gary Mueller</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Guy Shechter</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Jodi Masdea</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>
          Marek Herrmann-Nowosielski
        </div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>
          Steve + Lauren Magoun
        </div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Marc de Lecea</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Yi Yu</div>
      </div>
    </section>
  );
}
