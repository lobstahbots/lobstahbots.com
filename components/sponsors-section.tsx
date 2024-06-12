import BULogo from "../images/sponsor-logos/BULogo.png";
import BayerLogo from "../images/sponsor-logos/BayerLogo.png";
import BoeingLogo from "../images/sponsor-logos/BoeingLogo.png";
import BostonScientificlogo from "../images/sponsor-logos/BostonScientificLogo.png";
import BUALogo from "../images/sponsor-logos/BUALogo.png";
import QualityGraphicsLogo from "../images/sponsor-logos/QualityGraphicsLogo.svg";
import StandardBotsLogo from "../images/sponsor-logos/StandardBotsLogo.svg";
import styles from "./sponsors-section.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";

export default function SponsorsSection () {
  return (
    <section className="section container">
      <h1>Thank You To Our 2024 Sponsors & Donors!</h1>
      <div className={styles.gallery}>
        <Link href="https://www.bayer.com/en/" target="_blank"><Image src={BayerLogo} alt="Bayer Logo" className={ styles.sponsorLogo }/></Link>
        <Link href="https://www.boeing.com/" target="_blank"><Image src={BoeingLogo} alt="Boeing Logo" className={styles.sponsorLogo} /></Link>
        <Link href="https://www.bu.edu/" target="_blank"><Image src={BULogo} alt="BU Logo" className={styles.sponsorLogo} /></Link>
        <Link href ="https://www.bostonscientific.com/en-US/Home.html" target="_blank"><Image src={BostonScientificlogo} alt="Boston Scientific Logo" className={styles.sponsorLogo} /></Link>
        <Link href="https://www.buacademy.org/" target="_blank"><Image src={BUALogo} alt="BUA Logo" className={styles.sponsorLogo} /></Link>
        <Link href="https://qualitygraphicsinc.com/" target="_blank"><Image src={QualityGraphicsLogo} alt="Quality Graphics Logo" className={styles.sponsorLogo} /></Link>
        <div className={styles.sponsorLogo} id={styles.standardBots}>
          <Link href="https://standardbots.com/">
            <Image src={StandardBotsLogo} alt="Standard Bots Logo"/>
          </Link>
          <Link className="link" href="https://standardbots.com/blog/how-to-launch-your-career-in-robotics-straight-out-of-high-school">Check out their article on robotics after high school!</Link>
        </div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Teresa Scott</div>
        <div className={`${styles.individualDonor} ${styles.sponsorLogo}`}>Patricia Palmer</div>
      </div>
    </section>
  );
}
